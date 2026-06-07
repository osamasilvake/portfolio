/*
  Warnings:

  - A unique constraint covering the columns `[key,locale]` on the table `ServiceItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ServiceItem_locale_key";

-- CreateIndex
CREATE UNIQUE INDEX "ServiceItem_key_locale_key" ON "ServiceItem"("key", "locale");
