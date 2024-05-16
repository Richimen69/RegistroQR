import dbConnect from "../../../lib/dbConnect";
import Proveedores from "../../../models/proveedores";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
    const body = await request.json();
    dbConnect();
  
    try {
      const proveedores = await Proveedores.findByIdAndUpdate(
        params.id,
        { $set: body }, // Utiliza el operador $set para agregar o actualizar campos
        { new: true }
      );
  
      if (!proveedores)
        return NextResponse.json(
          {
            message: "Invitado not found",
          },
          {
            status: 404,
          }
        );
  
      return NextResponse.json(proveedores);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }
  }