import { Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const postMedicine = async (data: any) => {
  // console.log("service", { ...data });
  const result = await prisma.medicine.create({
    data,
  });
  return result;
};

export const sellerService = {
  postMedicine,
};
