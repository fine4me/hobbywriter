-- CreateEnum
CREATE TYPE "FlagType" AS ENUM ('Spam', 'Bullying', 'Inappropriate', 'Illegal', 'PromotingViolence', 'TOSVoilation');

-- CreateEnum
CREATE TYPE "FlagStatus" AS ENUM ('FLAGGED', 'REJECTED', 'PENDING');

-- CreateTable
CREATE TABLE "LikeTable" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEdited" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flag" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "flagType" "FlagType" NOT NULL,
    "description" VARCHAR(64),
    "flagStatus" "FlagStatus" NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Followers" (
    "id" TEXT NOT NULL,
    "followedByUserID" TEXT NOT NULL,
    "followingUserID" TEXT NOT NULL,

    CONSTRAINT "Followers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LikeTable" ADD CONSTRAINT "LikeTable_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeTable" ADD CONSTRAINT "LikeTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_followedByUserID_fkey" FOREIGN KEY ("followedByUserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_followingUserID_fkey" FOREIGN KEY ("followingUserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
