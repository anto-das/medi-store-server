import { toNodeHandler } from "better-auth/node";
import express, { Request, Response } from "express";
import { auth } from "./lib/auth";
import cors from "cors";
import { medicineRoute } from "./modules/medicine/medicine.routes";
import { sellerRouter } from "./modules/seller/seller.routes";
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello Medi Store....");
});
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/medicine", medicineRoute);
app.use("/api/seller", sellerRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send({
    message: "route not found..",
    method: req.method,
    url: req.url,
  });
});

export default app;
