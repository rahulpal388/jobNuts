-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('user', 'admin', 'both');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "provider" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "type" "UserType" NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
