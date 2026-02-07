-- AlterTable
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_pkey" PRIMARY KEY ("medicine_id");

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicine"("medicine_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicine"("medicine_id") ON DELETE RESTRICT ON UPDATE CASCADE;
