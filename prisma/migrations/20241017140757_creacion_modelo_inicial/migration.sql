-- CreateTable
CREATE TABLE "Temas" (
    "id" SERIAL NOT NULL,
    "tema" TEXT NOT NULL,
    "enlace" TEXT NOT NULL,
    "votos" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Temas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Temas_enlace_key" ON "Temas"("enlace");
