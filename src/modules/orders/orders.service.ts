import { Orders } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createOrders = async (
  data: Omit<Orders, "order_id" | "status" | "order_date"> & {
    orderItems: {
      medicine_id: string;
      order_quantity: number;
      price: string | number;
    }[];
  },
) => {
  const result = await prisma.$transaction(async (tx) => {
    const sellerIds = await Promise.all(
      data.orderItems.map(async (item) => {
        return await tx.medicine.findUnique({
          where: {
            medicine_id: item.medicine_id,
          },
          select: {
            seller_id: true,
          },
        });
      }),
    );

    for (const sellerId of sellerIds) {
      const order = await tx.orders.create({
        data: {
          customer_email: data.customer_email,
          total_bill: data.total_bill,
          seller_id: sellerId?.seller_id as string,
        },
      });
      await tx.order_item.createMany({
        data: data.orderItems.map((item) => ({
          order_id: order.order_id,
          medicine_id: item.medicine_id,
          order_quantity: item.order_quantity,
          price: item.price,
        })),
      });
      return await tx.orders.findUnique({
        where: { order_id: order.order_id },
        include: { orderItems: true },
      });
    }
  });
  return result;
};

const getAllOrders = async () => {
  return await prisma.orders.findMany({
    include: {
      orderItems: {
        select: {
          order_id: true,
          order_quantity: true,
          price: true,
        },
      },
    },
  });
};

const getSingleOrder = async (order_id: string) => {
  return await prisma.orders.findUnique({
    where: {
      order_id,
    },
    include: {
      orderItems: true,
    },
  });
};

const deleteOrder = async (id: string) => {
  const result = await prisma.orders.deleteMany({
    where: {
      order_id: id,
    },
  });
  return result;
};

export const orderService = {
  createOrders,
  getAllOrders,
  getSingleOrder,
  deleteOrder,
};
