import { Request, Response } from "express";
import { adminService } from "./admin.service";
import { success } from "better-auth";

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getUsers();
    res.status(200).send({
      success: true,
      message: "Retrieved all users successfully..",
      data: result,
    });
  } catch (err: any) {
    console.log("get all user error:....", err);
  }
};

export const adminController = {
  getUsers,
};
