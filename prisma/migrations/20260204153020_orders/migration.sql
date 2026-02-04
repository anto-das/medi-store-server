/*
  Warnings:

  - Added the required column `order_id` to the `Order_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order_item" ADD COLUMN     "order_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
