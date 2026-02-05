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
  console.log(data);
  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.orders.create({
      data: {
        customer_email: data.customer_email,
        total_bill: data.total_bill,
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

export const orderService = {
  createOrders,
  getAllOrders,
  getSingleOrder,
};
