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

const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const result = await adminService.updateUserStatus(userId as string, data);
    res.status(200).send({
      success: true,
      message: "Status updated successfully...",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "update user status error": e,
      },
    });
  }
};

export const adminController = {
  getUsers,
  updateUserStatus,
};
