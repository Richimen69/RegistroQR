import mongoose, { Schema, Document } from "mongoose";
export interface Proveedores extends Document {
  name: String,
  company: String,
  phone: Number,
  email: String,
  product: String,
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
});

const Proveedores = mongoose.models.Proveedores || mongoose.model<Proveedores>("Proveedores", proveedoresSchema);

export default Proveedores;