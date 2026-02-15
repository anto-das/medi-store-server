import { prisma } from "../../lib/prisma";

const getMedicine = async () => {
  const result = await prisma.medicine.findMany({});
  return result.map((item) => {
    const { categoryId, ...res } = item;
    return res;
  });
};

const getSingleMedicine = async (medicine_id: string) => {
  const result = prisma.medicine.findUnique({
    where: {
      medicine_id,
    },
  });
  return result;
};

export const medicineService = {
  getMedicine,
  getSingleMedicine,
};
