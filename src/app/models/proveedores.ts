import mongoose, { Schema, Document } from "mongoose";
export interface Proveedores extends Document {
  name: String,
  company: String,
  phone: Number,
  email: String,
  product: String,
  pago: String,
}
const proveedoresSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  pago: { // Nuevo campo
    type: String,
    required: false // Ajusta según tus necesidades
  },
  stand: { // Nuevo campo
    type: String,
    required: false // Ajusta según tus necesidades
  },
});

const Proveedores = mongoose.models.Proveedores || mongoose.model<Proveedores>("Proveedores", proveedoresSchema);

export default Proveedores;