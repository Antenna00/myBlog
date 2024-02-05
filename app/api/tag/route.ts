import { prisma } from "@/app/[locale]/util/connect";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server"
import { Post } from "@prisma/client";
import { Tag } from "@prisma/client";

export const GET = async (req:NextRequest) => {

    try{
        const tag : Tag[]= await prisma.tag.findMany()

        return NextResponse.json({tag}, { status:200 });
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! (GET tag api)'}, { status: 500 })
    }
}