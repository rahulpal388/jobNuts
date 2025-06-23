/*
  Warnings:

  - The `type` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'user';

-- DropEnum
DROP TYPE "UserType";
