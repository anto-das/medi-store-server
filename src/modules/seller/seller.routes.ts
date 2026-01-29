import { Router } from "express";
import { sellerController } from "./seller.controller";

const router: Router = Router();

router.post("/medicine", sellerController.postMedicine);

export const sellerRouter = router;
