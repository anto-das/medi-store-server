import { prisma } from "../../lib/prisma";

const getMedicine = async () => {
  const result = await prisma.medicine.findMany({});
  return result.map((item) => {
    const { categoryId, ...res } = item;
    return res;
  });
};

const getSingleMedicine = async (medicine_id: string) => {
  return prisma.medicine.findUnique({
    where: {
      medicine_id,
    },
  });
};

export const medicineService = {
  getMedicine,
  getSingleMedicine,
};
