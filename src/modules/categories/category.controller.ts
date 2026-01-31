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

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategories();
    res.status(200).send({
      success: true,
      message: "Retrieved all categories successfully..",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: {
        "get all Categories error": err,
      },
    });
  }
};

const deleteCategories = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await categoryService.deleteCategories(id as string);
    res.status(200).send({
      success: true,
      message: "Delete category successfully..",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: {
        "delete categories error": err,
      },
    });
  }
};

export const categoryController = {
  postCategory,
  getAllCategories,
  deleteCategories,
};
