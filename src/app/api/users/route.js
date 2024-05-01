import { connectDB } from "@/libs/mongodb";
import Invitados from "@/models/invitados";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB()
    const users = await Invitados.find()
    return NextResponse.json(users)
}

export async function POST(request){
    await connectDB()
    const data = await request.json()
    const users = await Invitados.create(data)
    return NextResponse.json(users)
}