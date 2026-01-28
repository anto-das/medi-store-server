import { toNodeHandler } from "better-auth/node";
import express, { Request, Response } from "express";
import { auth } from "./lib/auth";
const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello Medi Store....");
});
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use((req: Request, res: Response) => {
  res.status(404).send({
    message: "route not found..",
    method: req.method,
    url: req.url,
  });
});

export default app;
