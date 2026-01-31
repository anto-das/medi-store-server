/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Medicine` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_categoryId_fkey";

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "categoryId",
ADD COLUMN     "categoriesCategory_id" TEXT,
ADD COLUMN     "category" "Medi_Category" NOT NULL DEFAULT 'ANTIBIOTICS';

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_categoriesCategory_id_fkey" FOREIGN KEY ("categoriesCategory_id") REFERENCES "Categories"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
