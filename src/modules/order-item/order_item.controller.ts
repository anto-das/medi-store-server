import { Request, Response } from "express";
import { orderItemService } from "./order_item.service";

const createOrderItem = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await orderItemService.createOrderItem(data);
    res.status(200).send({
      success: true,
      message: "item add to cart successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "create order item error": e,
      },
    });
  }
};

export const orderItemController = {
  createOrderItem,
};
