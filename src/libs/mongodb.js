import mongoose, { connection } from "mongoose"

export async function connectDB(){
    const db = await mongoose.connect(process.env.MONGODB_URL)
    console.log(db.connection.db.databaseName)
}

connection.on('connected', () =>{
    console.log("ok")
})

connection.on('error', (err) =>{
    console.log("ok'nt", err)
})