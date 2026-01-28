import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello Medi Store....");
});

app.use((req: Request, res: Response) => {
  res.status(404).send({
    message: "route not found..",
    method: req.method,
    url: req.url,
  });
});


export default app
