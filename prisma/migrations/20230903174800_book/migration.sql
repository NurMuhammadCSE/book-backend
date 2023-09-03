/*
  Warnings:

  - The `status` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[contactNo]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `profileImg` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('shipped', 'delivered', 'pending');

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'customer',
ALTER COLUMN "profileImg" SET NOT NULL;

-- DropEnum
DROP TYPE "status";

-- CreateIndex
CREATE UNIQUE INDEX "users_contactNo_key" ON "users"("contactNo");
