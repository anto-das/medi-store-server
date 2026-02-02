import { prisma } from "../../lib/prisma";

const getMe = async (email: string) => {
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return result;
};

export const userService = {
  getMe,
};
