-- DropForeignKey
ALTER TABLE "Order_item" DROP CONSTRAINT "Order_item_medicine_id_fkey";

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicine"("medicine_id") ON DELETE CASCADE ON UPDATE CASCADE;
