import { prisma } from "../../lib/prisma";

const getMedicine = async () => {
  const result = await prisma.medicine.findMany({});
  return result.map((item) => {
    const { categoryId, ...res } = item;
    return res;
  });
};

export const medicineService = {
  getMedicine,
};
