-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "landmark" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "address1" TEXT,
ADD COLUMN     "address2" TEXT,
ADD COLUMN     "isDeleted" BOOLEAN,
ADD COLUMN     "isEmailVerified" BOOLEAN;
