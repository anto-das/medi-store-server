import { prisma } from "../../lib/prisma";

const postMedicine = async (data: any, seller_id: string) => {
  const categoryName = await prisma.categories.findUnique({
    where: {
      category_id: data.categoryId,
    },
    select: {
      category_type: true,
    },
  });
  console.log(categoryName?.category_type);
  const result = await prisma.medicine.create({
    data: {
      ...data,
      category_name: categoryName?.category_type,
      seller_id,
    },
  });
  return result;
};

const updatedMedicine = async (medicine_id: string, data: any) => {
  return await prisma.medicine.update({
    where: {
      medicine_id,
    },
    data: {
      ...data,
    },
  });
};

const deleteMedicine = async (medicine_id: string) => {
  return await prisma.medicine.delete({
    where: {
      medicine_id,
    },
  });
};

export const sellerService = {
  postMedicine,
  updatedMedicine,
  deleteMedicine,
};
