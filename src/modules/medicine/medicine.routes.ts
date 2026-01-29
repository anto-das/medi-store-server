import { Router } from "express";
import { medicineController } from "./medicine.controller";

const route: Router = Router();

route.get("/", medicineController.getMedicine);

export const medicineRoute = route;
