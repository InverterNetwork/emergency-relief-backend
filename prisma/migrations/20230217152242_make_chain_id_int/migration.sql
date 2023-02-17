/*
  Warnings:

  - Changed the type of `chain_id` on the `organization_wallets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `chain_id` on the `project_donation_wallets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "organization_wallets" DROP COLUMN "chain_id",
ADD COLUMN     "chain_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "project_donation_wallets" DROP COLUMN "chain_id",
ADD COLUMN     "chain_id" INTEGER NOT NULL;
