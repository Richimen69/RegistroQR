import { connectDB } from "@/libs/mongodb";
import Invitados from "@/models/invitados";
import TaskCard from "@/components/TaskCard";
import { IoPersonAdd } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-10">
        <Link href={"/form"}>
          <div className="bg-[#804ea2] p-10 w-[300px] h-[300px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
            <div>
              <IoPersonAdd />
            </div>
            <p className="text-2xl text-white">Agregar Invitado</p>
          </div>
        </Link>

        <div className="bg-[#804ea2] p-10 w-[300px] h-[300px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
          <p className="text-2xl text-white">Agregar Proveedor</p>
        </div>
      </div>
    </div>
  );
}
