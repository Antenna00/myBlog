/*
  Warnings:

  - You are about to drop the column `postTestSlug` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `PostTest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postTestSlug_fkey";

-- DropForeignKey
ALTER TABLE "PostTest" DROP CONSTRAINT "PostTest_catSlug_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "postTestSlug";

-- DropTable
DROP TABLE "PostTest";
