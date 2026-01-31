import { Router } from "express";
import roleCheckerAuth from "../../middleware/auth";
import { UserRole } from "../../Types/roleCheck";
import { categoryController } from "./category.controller";

const router: Router = Router();

router.post(
  "/",
  roleCheckerAuth(UserRole.ADMIN),
  categoryController.postCategory,
);

export const categoryRouter = router;
