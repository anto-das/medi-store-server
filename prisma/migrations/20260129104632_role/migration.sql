/*
  Warnings:

  - You are about to drop the column `customer_id` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `customer_email` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_email` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_customer_id_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "customer_id",
ADD COLUMN     "customer_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "customer_id",
ADD COLUMN     "customer_email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customer_email_fkey" FOREIGN KEY ("customer_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_customer_email_fkey" FOREIGN KEY ("customer_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
