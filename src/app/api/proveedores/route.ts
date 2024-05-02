import dbConnect from "../../lib/dbConnect";
import Proveedores from "../../models/proveedores";
import { NextResponse } from "next/server";
export async function GET() {
    await dbConnect();
    try {
        const proveedores = await Proveedores.find({});
        return NextResponse.json(proveedores);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}

export async function POST(request) {
    await dbConnect();
    try {
        const data = await request.json({});
        const proveedores = await Proveedores.create(data)
        return NextResponse.json(proveedores);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}