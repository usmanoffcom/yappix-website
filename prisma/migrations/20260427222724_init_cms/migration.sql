-- CreateTable
CREATE TABLE "ContentDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "locale" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "publishedAt" DATETIME,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "payload" JSONB NOT NULL
);

-- CreateIndex
CREATE INDEX "ContentDocument_locale_kind_publishedAt_idx" ON "ContentDocument"("locale", "kind", "publishedAt");

-- CreateIndex
CREATE INDEX "ContentDocument_locale_kind_sortOrder_idx" ON "ContentDocument"("locale", "kind", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ContentDocument_locale_kind_slug_key" ON "ContentDocument"("locale", "kind", "slug");
