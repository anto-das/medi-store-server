import { Request, Response } from "express";

function globalErrorHandler(err: any, req: Request, res: Response) {
  let statusCode = 500;
  let errorMessage = "Internal server error..";
  let errorDetail = err;

  res.status(statusCode);
  res.send({
    message: errorMessage,
    error: errorDetail,
  });
}

export default globalErrorHandler;
