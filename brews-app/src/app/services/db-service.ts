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

export const addNewBrew = async (brew: any) => {
  try {
    const newBrew = await prisma.coffee_beans.create({
      data: brew,
    });
    return newBrew;
  } catch (error) {
    throw new Error(`Error adding new brew: ${error}`);
  }
};

export const addPurchaseInfo = async (purchase: any) => {
  try {
    const newPurchase = await prisma.purchases.create({
      data: purchase,
    });
    return newPurchase;
  } catch (error) {
    throw new Error(`Error adding purchase info: ${error}`);
  }
};

export const addRating = async (rating: any) => {
  try {
    const newRating = await prisma.ratings.create({
      data: rating,
    });
    return newRating;
  } catch (error) {
    throw new Error(`Error adding rating: ${error}`);
  }
};

export const addManufacturer = async (manufacturer: any) => {
  try {
    const newManufacturer = await prisma.manufacturers.create({
      data: manufacturer,
    });
    return newManufacturer;
  } catch (error) {
    throw new Error(`Error adding manufacturer: ${error}`);
  }
};

export const updateBrew = async (name: string, brew: any) => {
  try {
    const updatedBrew = await prisma.coffee_beans.update({
      where: {
        name: name,
      },
      data: brew,
    });
    return updatedBrew;
  } catch (error) {
    throw new Error(`Error updating brew: ${error}`);
  }
};

export const deleteBrew = async (name: string) => {
  try {
    const deletedBrew = await prisma.coffee_beans.delete({
      where: {
        name: name,
      },
    });
    return deletedBrew;
  } catch (error) {
    throw new Error(`Error deleting brew: ${error}`);
  }
};

export const deletePurchase = async (id: number) => {
  try {
    const deletedPurchase = await prisma.purchases.delete({
      where: {
        id: id,
      },
    });
    return deletedPurchase;
  } catch (error) {
    throw new Error(`Error deleting purchase: ${error}`);
  }
};

export const deleteRating = async (id: number) => {
  try {
    const deletedRating = await prisma.ratings.delete({
      where: {
        id: id,
      },
    });
    return deletedRating;
  } catch (error) {
    throw new Error(`Error deleting rating: ${error}`);
  }
};

export const deleteManufacturer = async (id: number) => {
  try {
    const deletedManufacturer = await prisma.manufacturers.delete({
      where: {
        id: id,
      },
    });
    return deletedManufacturer;
  } catch (error) {
    throw new Error(`Error deleting manufacturer: ${error}`);
  }
};
