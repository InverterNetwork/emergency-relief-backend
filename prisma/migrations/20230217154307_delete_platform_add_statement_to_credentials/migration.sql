/*
  Warnings:

  - You are about to drop the column `platform` on the `project_credentials` table. All the data in the column will be lost.
  - Added the required column `statement` to the `project_credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project_credentials" DROP COLUMN "platform",
ADD COLUMN     "statement" TEXT NOT NULL;
