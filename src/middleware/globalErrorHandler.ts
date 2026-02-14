import { Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";

function globalErrorHandler(err: any, req: Request, res: Response) {
  let statusCode = 500;
  let errorMessage = "Internal server error..";
  let errorDetail = err;

  if (err instanceof Prisma.PrismaClientValidationError) {
    console.log("prisma global client validation error..****...",err)
    statusCode = 400;
    errorMessage = "You provide missing or incorrect field...";
  }
  res.status(statusCode).send({
    message: errorMessage,
    error: errorDetail,
  });
}

export default globalErrorHandler;
