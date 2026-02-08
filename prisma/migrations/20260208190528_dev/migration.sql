/*
  Warnings:

  - The primary key for the `Order_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[item_id]` on the table `Order_item` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Order_item" DROP CONSTRAINT "Order_item_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Order_item_item_id_key" ON "Order_item"("item_id");
