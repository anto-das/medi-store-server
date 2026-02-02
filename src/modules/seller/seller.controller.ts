import { Request, Response } from "express";
import { sellerService } from "./seller.service";

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

export const sellerController = {
  postMedicine,
};
