import { Medi_Category, Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const postMedicine = async (data: any, seller_id: string) => {
  // console.log("service", { ...data, seller_id });
  const result = await prisma.medicine.create({
    data: {
      ...data,
      seller_id,
    },
  });
  return result;
};

export const sellerService = {
  postMedicine,
};
