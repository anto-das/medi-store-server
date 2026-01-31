/*
  Warnings:

  - The `category_type` column on the `Categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "category_type",
ADD COLUMN     "category_type" TEXT NOT NULL DEFAULT 'ANTIBIOTICS';
