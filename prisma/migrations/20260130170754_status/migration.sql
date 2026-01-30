/*
  Warnings:

  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "status" TEXT DEFAULT 'ACTIVE',
ALTER COLUMN "role" SET NOT NULL;
