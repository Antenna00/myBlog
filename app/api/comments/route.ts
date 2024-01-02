import { prisma } from "@/app/[locale]/util/connect";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server"
import { Post } from "@prisma/client";


export const GET = async (req:NextRequest) => {

    const {searchParams} = new URL(req.url!);
    const postSlug = searchParams.get("postSlug");
    //I don't know why but postSlug is in object.


    try{
        const comments = await prisma.comment.findMany(
            {
                where: {
                    ...(postSlug && { postSlug: postSlug }),
                },
                include: {user:true}
            }
        );
        return NextResponse.json({comments}, { status:200 });
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! (GET comments api)'}, { status: 500 })
    }
}