-- DropForeignKey
ALTER TABLE "Order_item" DROP CONSTRAINT "Order_item_order_id_fkey";

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;
