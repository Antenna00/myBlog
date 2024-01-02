import { prisma } from "@/app/[locale]/util/connect";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server"
import { Post } from "@prisma/client";

interface PostParams {
    slug: string;
  }

//GET SINGLE POST
export const GET = async (req:NextRequest, {params} : {params: PostParams}, raa:NextApiRequest) => {
    const {slug} = params;

    // const {searchParams} = new URL(req.url!);
    // const page = parseInt(searchParams.get("page") ?? "1", 10);
    // const cat = searchParams.get("cat") ?? "";
    // const POST_PER_PAGE = 3;
    try{
        const post = await prisma.post.findUnique({
            where: {slug},
            include:{ user: true },
        });
        return NextResponse.json(post, { status:200 });
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! (GET post api)'}, { status: 500 })
    }
}