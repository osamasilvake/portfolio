/*
  Warnings:

  - A unique constraint covering the columns `[key,locale]` on the table `ServiceItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ServiceItem" ADD COLUMN     "locale" TEXT NOT NULL DEFAULT 'en';

-- CreateIndex
CREATE UNIQUE INDEX "ServiceItem_key_locale_key" ON "ServiceItem"("key", "locale");
