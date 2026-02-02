import { Router } from "express";
import { medicineController } from "./medicine.controller";

const route: Router = Router();

route.get("/", medicineController.getMedicine);

route.get("/:id", medicineController.getSingleMedicine);

export const medicineRoute = route;
