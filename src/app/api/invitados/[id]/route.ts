import dbConnect from "../../../lib/dbConnect";
import Invitados from "../../../models/invitados";
import Proveedores from "../../../models/proveedores";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await dbConnect();

    let invitados = await Invitados.findById(params.id);
    let tipo = "Invitado";

    if (!invitados) {
      invitados = await Proveedores.findById(params.id);
      tipo = "Proveedor";
    }

    return NextResponse.json({ ...invitados._doc, tipo });
  } catch (err: any) {
    return NextResponse.json("No Registrado");
  }
}

export async function PUT(request, { params }) {
  const body = await request.json();
  dbConnect();
  try {
    let tipo = "Invitado";
    let invitados = await Invitados.findByIdAndUpdate(
      params.id,
      { $set: body }, // Utiliza el operador $set para agregar o actualizar campos
      { new: true }
    );

    if (!invitados) {
      invitados = await Proveedores.findByIdAndUpdate(
        params.id,
        { $set: body }, // Utiliza el operador $set para agregar o actualizar campos
        { new: true }
      );
      tipo = "Proveedor";
    }

    return NextResponse.json({ invitados, tipo });
    
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
