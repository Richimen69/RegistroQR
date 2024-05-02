import dbConnect from "../../lib/dbConnect";
import Invitados from "../../models/invitados";
import { NextResponse } from "next/server";
export async function GET() {
    await dbConnect();
    try {
        const invitados = await Invitados.find({});
        return NextResponse.json(invitados);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}

export async function POST(request) {
    await dbConnect();
    try {
        const data = await request.json({});
        const invitados = await Invitados.create(data)
        return NextResponse.json(invitados);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}