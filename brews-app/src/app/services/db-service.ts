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

export const getAllPurchases = async () => {
  try {
    const purchases = await prisma.purchases.findMany();
    const purchasesAsJson = JSON.parse(JSON.stringify(purchases));
    return purchasesAsJson;
  } catch (error) {
    throw new Error(`Error fetching purchases: ${error}`);
  }
};

export const getAllRatings = async () => {
  try {
    const ratings = await prisma.ratings.findMany();
    const ratingsAsJson = JSON.parse(JSON.stringify(ratings));
    return ratingsAsJson;
  } catch (error) {
    throw new Error(`Error fetching ratings: ${error}`);
  }
};

export const getAllManufacturers = async () => {
  try {
    const manufacturers = await prisma.manufacturers.findMany();
    const manufacturersAsJson = JSON.parse(JSON.stringify(manufacturers));
    return manufacturersAsJson;
  } catch (error) {
    throw new Error(`Error fetching manufacturers: ${error}`);
  }
};

export const getSingleBrew = async (name: string) => {
  try {
    const brew = await prisma.coffee_beans.findFirst({
      where: {
        name: name,
      },
    });
    const brewAsJson = JSON.parse(JSON.stringify(brew));
    return brewAsJson;
  } catch (error) {
    throw new Error(`Error fetching brew: ${error}`);
  }
};
