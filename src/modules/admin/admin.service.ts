import { User } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const getUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const updateUserStatus = async (userId: string, data: User) => {
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...data,
    },
  });
  return result;
};

export const adminService = {
  getUsers,
  updateUserStatus,
};
