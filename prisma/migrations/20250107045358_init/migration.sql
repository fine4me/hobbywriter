-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('ADMIN', 'USER', 'MODERATOR');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHERS');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('BANNED', 'INACTIVE', 'ACTIVE');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilepic" TEXT NOT NULL DEFAULT 'defaultuser.png',
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "bio" TEXT,
    "createtime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "RoleType" NOT NULL DEFAULT 'USER',
    "flagcount" INTEGER DEFAULT 0,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "badges" JSONB DEFAULT '{}',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
