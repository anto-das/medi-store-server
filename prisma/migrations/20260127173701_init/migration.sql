-- CreateTable
CREATE TABLE "Medicine" (
    "medicine_id" TEXT NOT NULL,
    "medicine_name" VARCHAR(150) NOT NULL,
    "category" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "price" DECIMAL(10,0) NOT NULL,
    "stock_quantity" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Medicine_medicine_id_key" ON "Medicine"("medicine_id");
