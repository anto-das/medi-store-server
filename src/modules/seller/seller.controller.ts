import { Request, Response } from "express";
import { sellerService } from "./seller.service";

const postMedicine = async (req: Request, res: Response) => {
    const body = req.user
    console.log(body)
  const result = await sellerService.postMedicine();
  res.status(200).send({
    success: true,
    message: "store medicine successfully...",
    data: result,
  });
};

export const sellerController ={
    postMedicine
}