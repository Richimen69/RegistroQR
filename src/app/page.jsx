'use client'
import Link from "next/link";
import { IconContext } from "react-icons";
import { FcAssistant, FcBusinessman } from "react-icons/fc";
import { FaDatabase } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 md:gap-10 gap-5">
          <div className="flex flex-col">
            <Link href={"/formInvitados"}>
              <div className="bg-[#804ea2] p-10 md:w-[300px] md:h-[300px] w-[150px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
                <IconContext.Provider value={{ color: "white", size: "8em" }}>
                  <FcBusinessman />
                </IconContext.Provider>
                <p className="md:text-2xl text-base  text-white">Agregar Invitado</p>
              </div>
            </Link>
            <div className="flex items-center justify-center p-5">
              <Link href={"/bdInvitados"}>
                <div className="md:hover:scale-125 md:transition-transform w-auto">
                  <IconContext.Provider value={{ size: "3em", color: "#804ea2" }}>
                    <FaDatabase />
                  </IconContext.Provider>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <Link href={"/formProveedores"}>
              <div className="bg-[#804ea2] p-10 md:w-[300px] md:h-[300px] w-[150px] flex flex-col items-center justify-center rounded-[40px] md:hover:scale-105 md:transition-transform hover:opacity-75 cursor-pointer">
                <IconContext.Provider value={{ color: "white", size: "8em" }}>
                  <FcAssistant />
                </IconContext.Provider>
                <p className="md:text-2xl text-base text-white">Agregar Proveedor</p>
              </div>
            </Link>
            <div className="flex items-center justify-center p-5">
              <Link href={"/bdProveedores"}>
                <div className="md:hover:scale-125 md:transition-transform w-auto">
                  <IconContext.Provider value={{ size: "3em", color: "#804ea2" }}>
                    <FaDatabase />
                  </IconContext.Provider>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end px-5 w-full">
        <Link href={"/read"}>
          <div className="md:hover:scale-125 md:transition-transform w-auto">
            <IconContext.Provider value={{ size: "5em", color: "#804ea2" }}>
              <BsQrCodeScan />
            </IconContext.Provider>
          </div>
        </Link>
      </div>
    </div>
  );
}