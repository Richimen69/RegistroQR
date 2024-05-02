import mongoose, { Schema, Document } from "mongoose";
export interface Invitados extends Document {
  name: String,
  company: String,
  phone: Number,
  email: String,
  product: String,
}
const invitadosSchema: Schema = new mongoose.Schema({
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
});

const Invitados = mongoose.models.Invitados || mongoose.model<Invitados>("Invitados", invitadosSchema);

export default Invitados;