import { Router } from "express";
import { orderItemController } from "./order_item.controller";

const router: Router = Router();

router.post("/", orderItemController.createOrderItem);

export const orderItemRouter = router;
