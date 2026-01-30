import { Request, Response } from "express";
import { sellerService } from "./seller.service";

const postMedicine = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body);
    const result = await sellerService.postMedicine();
    res.status(200).send({
      success: true,
      message: "store medicine successfully...",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err,
    });
  }
};

export const sellerController = {
  postMedicine,
};
