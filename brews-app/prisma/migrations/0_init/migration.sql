-- CreateTable
CREATE TABLE "coffee_beans" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "roast" TEXT,
    "price" DECIMAL(5,2),
    "manufacturer_id" INTEGER,

    CONSTRAINT "coffee_beans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufacturers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT,

    CONSTRAINT "manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "coffee_bean_id" INTEGER,
    "place_bought" TEXT,
    "date_bought" DATE,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "coffee_bean_id" INTEGER,
    "user_id" INTEGER,
    "rating" INTEGER,
    "review" TEXT,
    "date_rated" DATE,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coffee_beans" ADD CONSTRAINT "coffee_beans_manufacturer_id_fkey" FOREIGN KEY ("manufacturer_id") REFERENCES "manufacturers"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_coffee_bean_id_fkey" FOREIGN KEY ("coffee_bean_id") REFERENCES "coffee_beans"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_coffee_bean_id_fkey" FOREIGN KEY ("coffee_bean_id") REFERENCES "coffee_beans"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

