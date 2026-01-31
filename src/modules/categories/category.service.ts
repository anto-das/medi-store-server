import { prisma } from "../../lib/prisma";

const postCategory = async (data: string) => {
  const result = await prisma.categories.create({
    data,
  });
  return result;
};

const getAllCategories = async () => {
  const result = prisma.categories.findMany();
  return result
};

const deleteCategories = async (id: string) => {
  return await prisma.categories.delete({
    where: {
      category_id: id,
    },
  });
};

export const categoryService = {
  postCategory,
  getAllCategories,
  deleteCategories,
};
