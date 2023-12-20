/*
  Warnings:

  - You are about to drop the column `Immunization` on the `Child` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Child" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL
);
INSERT INTO "new_Child" ("firstName", "gender", "id", "lastName") SELECT "firstName", "gender", "id", "lastName" FROM "Child";
DROP TABLE "Child";
ALTER TABLE "new_Child" RENAME TO "Child";
CREATE TABLE "new_Immunization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "childId" TEXT,
    CONSTRAINT "Immunization_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Child" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Immunization" ("id", "name") SELECT "id", "name" FROM "Immunization";
DROP TABLE "Immunization";
ALTER TABLE "new_Immunization" RENAME TO "Immunization";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
