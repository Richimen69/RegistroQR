"use client";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Link from "next/link";
import BD from "../../components/BD"
const BDInvitados = () => {
    return (
        <div className="w-screen h-screen bg-principal">
            <div className="flex flex-col items-center justify-center">
                <div className="p-5">
                    <p className="text-primary text-2xl font-bold">Lista de Invitados</p>
                </div>
                <BD consulta={"invitados"} />
            </div>
        </div>
    )
}
export default BDInvitados