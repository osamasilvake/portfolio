-- CreateTable
CREATE TABLE "ProfileContent" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "intro" TEXT NOT NULL,
    "specialties" TEXT NOT NULL,
    "passion" TEXT NOT NULL,
    "buttonTitle" TEXT NOT NULL,
    "yearsExperience" TEXT NOT NULL,
    "satisfactionRate" TEXT NOT NULL,
    "satisfactionLabel" TEXT NOT NULL,

    CONSTRAINT "ProfileContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfileContent_locale_key" ON "ProfileContent"("locale");
