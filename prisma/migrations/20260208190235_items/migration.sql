-- AlterTable
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_pkey" PRIMARY KEY ("item_id");

-- DropIndex
DROP INDEX "Order_item_item_id_key";
