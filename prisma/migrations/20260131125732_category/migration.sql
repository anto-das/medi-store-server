/*
  Warnings:

  - You are about to drop the column `category` on the `Categories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "category",
ADD COLUMN     "category_type" "Medi_Category" NOT NULL DEFAULT 'ANTIBIOTICS';
