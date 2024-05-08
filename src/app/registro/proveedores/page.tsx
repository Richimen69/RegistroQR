'use client'
import Swal from "sweetalert2";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/navigation'
const InputField = ({ id, placeholder, value, onChange }) => (
    <label
        htmlFor={id}
        className="relative block overflow-hidden rounded-md border border-primary px-3 pt-3 shadow-sm focus-within:border-red-700 focus-within:ring-1 focus-within:ring-red-700"
    >
        <input
            type="text"
            id={id}
            name={id}
            placeholder={placeholder}
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            onChange={onChange}
            value={value}
            required
        />

        <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
            {placeholder}
        </span>
    </label>
);

function Formulario() {
    const router = useRouter()
    const [newSupp, setSupp] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        product: "",
    });
    const red = () => {
        router.push("/")
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(newSupp)
        await createSupp()
        setSupp({
            name: "",
            company: "",
            phone: "",
            email: "",
            product: "",
        });
        Swal.fire({
            title: "Registro Exitoso",
            text: "Presiona para continuar",
            icon: "success"
        });
        red()
    };
    const createSupp = async () => {
        const res = await fetch("/api/proveedores", {
            method: "POST",
            body: JSON.stringify(newSupp),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);
    };
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setSupp({ ...newSupp, [e.target.name]: e.target.value });

    return (
        <div className="w-full md:h-full h-screen bg-principal">
            <div className="flex items-center justify-center">
                <img src={"/canacintra.png"} alt="Logo Canacintra" className="w-[700px]" />
            </div>
            <div className="flex items-center flex-col justify-center">
                <p className="text-4xl font-bold text-secondary">Rellena los datos</p>
                <form onSubmit={handleSubmit}>
                    <div className="pt-5 pb-2 w-[300px]">
                        <InputField id="name" placeholder="Nombre" value={newSupp.name} onChange={handleChange} />
                    </div>
                    <div className="py-2 w-[300px]">
                        <InputField id="company" placeholder="Nombre de la empresa" value={newSupp.company} onChange={handleChange} />
                    </div>
                    <div className="py-2 w-[300px]">
                        <InputField id="email" placeholder="Correo Electronico" value={newSupp.email} onChange={handleChange} />
                    </div>
                    <div className="py-2 w-[300px]">
                        <InputField id="phone" placeholder="Celular (WhatsApp)" value={newSupp.phone} onChange={handleChange} />
                    </div>
                    <div className="py-2 w-[300px]">
                        <InputField id="product" placeholder="Giro" value={newSupp.product} onChange={handleChange} />
                    </div>
                    <div className="flex items-center justify-center py-5">
                        <button className="bg-primary rounded-2xl hover:opacity-95 border hover:border-red-700">
                            <p className="text-white py-2 px-5">Registrar</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Formulario