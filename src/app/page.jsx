'use client'
import Link from "next/link";
const Home = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-principal">
            <div className="flex items-center justify-center">
                <p className="md:text-5xl text-2xl text-center w-9/12 text-secondary font-bold">FERIA EMPRESARIAL CANACINTRA 2024</p>
                <img src={"/logo.png"} alt="Logo Canacintra" className="md:h-[100px] h-[70px] md:px-5 pr-2" />
            </div>
            <div className="flex items-center justify-center p-5">
                <p className="md:text-3xl text-xl text-secondary font-bold">Elija la opción deseada</p>
            </div>
            <div className="flex items-center justify-center py-36 md:py-5 p-3 gap-5">
                <Link href={'/registro/compradores'}>
                    <button className="bg-primary rounded-2xl hover:opacity-95 border hover:border-red-700">
                        <p className="text-white md:p-5 p-2">Registrar como comprador</p>
                    </button>
                </Link>
                <Link href={'/registro/proveedores'}>
                    <button className="bg-primary rounded-2xl hover:opacity-95 border hover:border-red-700">
                        <p className="text-white md:p-5 p-2">Registrar como proveedor</p>
                    </button>
                </Link>
            </div>
            <img src={"/canacintra.png"} alt="Logo Canacintra" className="w-[700px] py-10" />
        </div>
    )
}

export default Home