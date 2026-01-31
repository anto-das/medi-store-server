import { Request, Response } from "express";
import { categoryService } from "./category.service";

const postCategory = async (req: Request, res: Response) => {
  try {
     const category = req.body;
  console.log(category);
  const result = await categoryService.postCategory(category);
  res.status(200).send({
    success: true,
    data: result,
  });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "category post error": e,
      },
    });
  }
};

export const categoryController = {
  postCategory,
};
