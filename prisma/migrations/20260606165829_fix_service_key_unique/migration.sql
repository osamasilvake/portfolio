/*
  Warnings:

  - A unique constraint covering the columns `[locale]` on the table `ServiceItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ServiceItem_key_locale_key";

-- CreateIndex
CREATE UNIQUE INDEX "ServiceItem_locale_key" ON "ServiceItem"("locale");
