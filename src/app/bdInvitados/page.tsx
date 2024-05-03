"use client";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Link from "next/link";
import BD from "../../components/BD"
const BDInvitados = () => {
    return (
        <div className="w-screen h-screen bg-black">
            <div className="px-5">
                <Link href={"/"}>
                    <div className="w-auto">
                        <IconContext.Provider value={{ size: "3em", color: "white" }}>
                            <IoReturnUpBackOutline />
                        </IconContext.Provider>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="p-5">
                    <p className="text-white text-2xl">Lista de Invitados</p>
                </div>
                <BD consulta={"invitados"} />
            </div>
        </div>
    )
}
export default BDInvitados