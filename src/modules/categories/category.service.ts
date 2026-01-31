import { Medi_Category } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const postCategory = async (data: Medi_Category) => {
  const result = await prisma.categories.create({
    data
  });
  return result;
};

export const categoryService = {
  postCategory,
};
