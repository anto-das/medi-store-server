import { Request, Response } from "express";
import { sellerService } from "./seller.service";
import { success } from "better-auth";
import { Status } from "../../../generated/prisma/enums";

const postMedicine = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const sellerId = req.user?.id;
    const result = await sellerService.postMedicine(body, sellerId as string);
    console.log(result);
    res.status(200).send({
      success: true,
      message: "store medicine successfully...",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: {
        "seller medicine created er error:": err,
      },
    });
    console.log(err);
  }
};

const getSellerOrders = async (req: Request, res: Response) => {
  try {
    const seller_id = req.user?.id;
    const result = await sellerService.getSellerOrders(seller_id as string);
    res.status(200).send({
      success: true,
      message: "Retrieved your orders successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "get seller order message": e,
      },
    });
  }
};

const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const seller_id = req.params.id;
    const status = req.body.status;
    const result = await sellerService.updateOrderStatus(
      seller_id as string,
      status,
    );
    res.status(201).send({
      success: true,
      message: "status updated successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "update order status error": e,
      },
    });
  }
};

const updatedMedicine = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await sellerService.updatedMedicine(id as string, body);
    res.status(201).send({
      success: true,
      message: "updated your defined medicine successfully...",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "updated medicine error": e,
      },
    });
  }
};

const deleteMedicine = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await sellerService.deleteMedicine(id as string);
    res.status(200).send({
      success: true,
      message: "Medicine deleted successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "delete medicine error": e,
      },
    });
  }
};

export const sellerController = {
  postMedicine,
  getSellerOrders,
  updateOrderStatus,
  updatedMedicine,
  deleteMedicine,
};
