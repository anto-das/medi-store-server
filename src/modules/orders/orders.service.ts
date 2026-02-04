import { Orders } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createOrders = async (
  data: Omit<Orders, "order_id" | "status" | "order_date">,
) => {
  const result = await prisma.orders.create({
    data: {
      ...data,
    },
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

export const orderService = {
  createOrders,
  getAllOrders,
};
