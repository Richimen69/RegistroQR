import React from "react";
import user from "../assets/user.png"
import proveedor from "../assets/proveedor.png"
import { connectDB } from "@/libs/mongodb";
import Invitados from "@/models/invitados";
import TaskCard from "@/components/TaskCard";

async function load(){
    connectDB()
    const tasks = await Invitados.find()
    return tasks
}
async function Home(){
    const tasks = await load()
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-10">
        <div className="bg-[#804ea2] p-10 w-[300px] h-[300px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
            <img src={user} alt="" className="w-auto h-[200px] opacity-75"/>
          <p className="text-2xl text-white">Agregar Invitado</p>
        </div>
        <div className="bg-[#804ea2] p-10 w-[300px] h-[300px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
            <img src={proveedor} alt="" className="w-auto h-[200px] opacity-75"/>
          <p className="text-2xl text-white">Agregar Proveedor</p>
        </div>
        <div>
            {tasks.map(invitado => (
                <TaskCard invitado={invitado} key={invitado._id}/>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
