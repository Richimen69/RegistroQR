import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: String,
  company: String,
  phone: Number,
  email: String,
  product: String,
});
export default mongoose.models.Invitados || mongoose.model("Invitados", schema);
