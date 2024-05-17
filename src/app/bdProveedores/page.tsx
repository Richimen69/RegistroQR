"use client";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Link from "next/link";
import BD from "../../components/BD"
const BDInvitados = () => {
    return (
        <div className="w-screen h-full py-5 bg-principal">
            <div className="flex flex-col items-center justify-center w-auto table-auto">
                <div className="p-5">
                    <p className="text-primary text-2xl font-bold">Lista de Proveedores</p>
                </div>
                <BD consulta={"proveedores"} />
            </div>
        </div>
    )
}
export default BDInvitados