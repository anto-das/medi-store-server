/*
  Warnings:

  - You are about to drop the column `category_id` on the `Medicine` table. All the data in the column will be lost.
  - Made the column `medi_img` on table `Medicine` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_category_id_fkey";

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "category_id",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "category_name" TEXT NOT NULL DEFAULT 'ANTIBIOTICS',
ALTER COLUMN "medi_img" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
