/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('BLOCKED', 'DRAFT', 'PUBLISHED', 'ARCHIVED', 'PUBLICARCHIVE');

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL DEFAULT 'defaultuser.png',
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "bio" TEXT,
    "registeredOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "RoleType" NOT NULL DEFAULT 'USER',
    "flagcount" INTEGER DEFAULT 0,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "badges" JSONB DEFAULT '[]',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "parentId" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEdited" TIMESTAMP(3) NOT NULL,
    "image" TEXT DEFAULT 'postDefault.png',
    "status" "PostStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
