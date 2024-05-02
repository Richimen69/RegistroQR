'use client'
import Link from "next/link";
import { IconContext } from "react-icons";
import { FcAssistant, FcBusinessman } from "react-icons/fc";
export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-2 md:gap-10 gap-5">
        <Link href={"/formInvitados"}>
          <div className="bg-[#804ea2] p-10 md:w-[300px] md:h-[300px] w-[150px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
            <IconContext.Provider value={{ color: "white", size: "8em" }}>
              <FcBusinessman />
            </IconContext.Provider>
            <p className="md:text-2xl text-base  text-white">Agregar Invitado</p>
          </div>
        </Link>
        <Link href={"/formProveedores"}>
          <div className="bg-[#804ea2] p-10 md:w-[300px] md:h-[300px] w-[150px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
            <IconContext.Provider value={{ color: "white", size: "8em" }}>
              <FcAssistant />
            </IconContext.Provider>
            <p className="md:text-2xl text-base text-white">Agregar Proveedor</p>
          </div>
        </Link>
      </div>
    </div>
  );
}