import { Router } from "express";
import { adminController } from "./admin.controller";

const route: Router = Router();

route.get("/users", adminController.getUsers);

export const adminRouter = route;
