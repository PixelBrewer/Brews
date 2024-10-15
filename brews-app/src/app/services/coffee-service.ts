import prisma from "@/lib/prisma";

export const getAllBrews = async () => {
  try {
    const brews = await prisma.coffee_beans.findMany();
    const brewsAsJson = JSON.parse(JSON.stringify(brews));
    return brewsAsJson;
  } catch (error) {
    throw new Error(`Error fetching brews: ${error}`);
  }
};
