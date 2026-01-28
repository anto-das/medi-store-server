/*
  Warnings:

  - You are about to drop the column `category` on the `Medicine` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Medi_Category" AS ENUM ('ANTIBIOTICS', 'PAIN', 'VITAMINS', 'CARDIOLOGY', 'DERMATOLOGY', 'DIABETES', 'HERBAL');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED');

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Categories" (
    "category_id" TEXT NOT NULL,
    "category" "Medi_Category" NOT NULL DEFAULT 'ANTIBIOTICS'
);

-- CreateTable
CREATE TABLE "Orders" (
    "order_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "total_bill" DECIMAL(10,0) NOT NULL,
    "order_date" TIMESTAMP NOT NULL
);

-- CreateTable
CREATE TABLE "Order_item" (
    "item_id" TEXT NOT NULL,
    "medicine_id" TEXT NOT NULL,
    "order_quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,0) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Reviews" (
    "review_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "medicine_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "comment" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_category_id_key" ON "Categories"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_order_id_key" ON "Orders"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_item_item_id_key" ON "Order_item"("item_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reviews_review_id_key" ON "Reviews"("review_id");

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicine"("medicine_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicine"("medicine_id") ON DELETE RESTRICT ON UPDATE CASCADE;
