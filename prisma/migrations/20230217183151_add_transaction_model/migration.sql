-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAIL');

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "transaction_hash" TEXT NOT NULL,
    "from_wallet" TEXT NOT NULL,
    "to_wallet_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_to_wallet_id_fkey" FOREIGN KEY ("to_wallet_id") REFERENCES "project_donation_wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
