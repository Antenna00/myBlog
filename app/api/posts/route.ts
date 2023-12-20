import { prisma } from "@/app/util/connect";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server"
import { Post } from "@prisma/client";


export const GET = async (req:NextRequest) => {

    const {searchParams} = new URL(req.url!);
    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const cat = searchParams.get("cat") ?? "";
    const POST_PER_PAGE = 3;

    try{
        const [posts, count] : [Post[], number] = await prisma.$transaction([
         prisma.post.findMany(            
            {
            take: POST_PER_PAGE, 
            skip: POST_PER_PAGE * (page - 1),
            where:{
                ...(cat && { catSlug: cat })
            },
            orderBy: {
                dateUploaded: 'desc'
              }
            }),
            prisma.post.count({where:{
                ...(cat && { catSlug: cat })
            }})
        ]);
        return NextResponse.json({posts, count}, { status:200 });
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! (GET post api)'}, { status: 500 })
    }
}