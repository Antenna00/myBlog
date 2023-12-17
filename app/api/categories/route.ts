
import { prisma } from "@/app/util/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories, { status: 200 })
        
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Something went wrong!' }, { status: 500 })
    }
}

