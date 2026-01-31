/*
  Warnings:

  - You are about to drop the column `category` on the `Medicine` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT;

-- DropEnum
DROP TYPE "Medi_Category";

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
