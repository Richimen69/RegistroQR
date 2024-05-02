import mongoose from "mongoose"

export async function connectDB(){
    const db = await mongoose.connect(process.env.MONGODB_URL)
    console.log(db.connection.db.databaseName)
}