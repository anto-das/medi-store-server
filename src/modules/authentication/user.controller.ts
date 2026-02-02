import { Request, Response } from "express";
import { userService } from "./user.service";

const getMe = async (req: Request, res: Response) => {
  try {
    const email = req.user?.email;
    console.log(email)
    // console.log(req)
    const result = await userService.getMe(email as string);
    res.status(200).send({
      success: true,
      message: "Retrieved your info successfully..",
      data: result,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: {
        "get me error": e,
      },
    });
  }
};

export const userController = {
  getMe,
};
