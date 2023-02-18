/*
  Warnings:

  - A unique constraint covering the columns `[transaction_hash]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "transactions_transaction_hash_key" ON "transactions"("transaction_hash");
