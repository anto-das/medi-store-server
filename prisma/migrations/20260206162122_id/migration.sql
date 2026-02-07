-- migration.sql ফাইলের ভেতরে
ALTER TABLE "Order_item" DROP CONSTRAINT "Order_item_medicine_id_fkey";
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_medicine_id_fkey";
DROP INDEX "Medicine_medicine_id_key";

