import { Request, Response } from "express";
import { orderService } from "./orders.service";

const createOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.createOrders(req.body);
    res.status(200).send({
      success: true,
      message: "create orders successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "create orders error": e,
      },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders();
    console.log(result)
    res.status(200).send({
      success: true,
      message: "Retrieved all orders data successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "get all order error": e,
      },
    });
  }
};

export const orderController = {
  createOrders,
  getAllOrders,
};
