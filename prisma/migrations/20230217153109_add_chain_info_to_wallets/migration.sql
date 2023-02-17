/*
  Warnings:

  - Added the required column `chain` to the `organization_wallets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chain` to the `project_donation_wallets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organization_wallets" ADD COLUMN     "chain" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project_donation_wallets" ADD COLUMN     "chain" TEXT NOT NULL;
