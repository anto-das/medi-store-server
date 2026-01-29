import { Request, Response } from "express";
import { medicineService } from "./medicine.service";

const getMedicine = async (req: Request, res: Response) => {
  const result = await medicineService.getMedicine();
  res.status(200).send({
    success: true,
    message: "medicine retrieved successfully..",
    data: result,
  });
};

export const medicineController = {
  getMedicine,
};
