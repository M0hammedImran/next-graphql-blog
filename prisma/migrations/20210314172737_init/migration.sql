-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(25),
    "lastName" VARCHAR(25),
    "email" TEXT NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "phone" TEXT,
    "state" TEXT,
    "city" TEXT,
    "landmark" TEXT,
    "country" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "isDeleted" BOOLEAN,
    "isEmailVerified" BOOLEAN,
    "bio" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(50),
    "sectionOne" VARCHAR(256),
    "sectionTwo" VARCHAR(256),
    "sectionThree" VARCHAR(256),
    "authorId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
