import { prisma } from "@/app/[locale]/util/connect";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server"
import { Post } from "@prisma/client";
import { getAuthSession } from "@/app/[locale]/util/auths";


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
        return NextResponse.json(comments, { status:200 });
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! (GET comments api)'}, { status: 500 })
    }
}

//CREATE A COMMENT
export const POST = async (req:NextRequest) => {
    const session = await getAuthSession();
    if(!session) {
        return new NextResponse(
            JSON.stringify({message: "No Session. User may not logged in."}),
            {status:401}
        )
    }

    try{
        const body = await req.json()
        const comment = await prisma.comment.create({
            data: {...body, userEmail: session?.user?.email}
        })
        return NextResponse.json(comment, { status:200 });
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! (GET comments api)'}, { status: 500 })
    }
}