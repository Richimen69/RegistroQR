import dbConnect from "../../../lib/dbConnect";
import Invitados from "../../../models/invitados";
import Proveedores from "../../../models/proveedores";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await dbConnect();

        let invitados = await Invitados.findById(params.id);

        if (!invitados) {
            invitados = await Proveedores.findById(params.id);
        }

        if (!invitados) {
            return NextResponse.json({ message: "No Registrado" }, { status: 400 });
        }

        return NextResponse.json(invitados);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}
