import { Order_item } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createOrderItem = async (
  data: Omit<Order_item, "item_id" | "createdAt">,
) => {
  const result = await prisma.order_item.createMany({
    data: data,
  });
  return result;
};

export const orderItemService = {
  createOrderItem,
};
