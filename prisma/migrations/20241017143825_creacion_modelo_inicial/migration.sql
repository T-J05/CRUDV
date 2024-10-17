/*
  Warnings:

  - A unique constraint covering the columns `[tema]` on the table `Temas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Temas_tema_key" ON "Temas"("tema");
