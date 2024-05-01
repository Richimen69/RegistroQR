import mongoose from "mongoose"


const schema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String
})
export default mongoose.models.Invitados || mongoose.model('Invitados', schema)
