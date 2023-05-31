-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "idVehicule" SERIAL NOT NULL,
    "matricule" VARCHAR(255) NOT NULL,
    "marque" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "couleur" VARCHAR(255) NOT NULL,
    "annee" VARCHAR(255) NOT NULL,
    "prix" VARCHAR(255) NOT NULL,
    "disponibilte" BOOLEAN NOT NULL,
    "kilometer" VARCHAR(255) NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("idVehicule")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicule_matricule_key" ON "Vehicule"("matricule");
