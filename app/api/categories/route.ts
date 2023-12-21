
import { prisma } from "@/app/util/connect";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    const {searchParams} = new URL(req.url!);
    const cat = searchParams.get("cat") ?? "";

    if(cat !== "") {
        try{
            const catImage = await prisma.category.findMany(
                {
                    where:{
                        title:"infrastructure"
                    }
                }
            )
            return NextResponse.json({catImage}, { status:200 });
        }catch(err) {
            return NextResponse.json({ error: 'Something went wrong! (GET Image api)'}, { status: 500 })
        }
    } 

    try{
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories, { status: 200 })
        
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Something went wrong!' }, { status: 500 })
    }
}
