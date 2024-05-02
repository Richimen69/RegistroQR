"use client";
import Link from "next/link";
import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { IconContext } from "react-icons";
import { MdOutlineCancel } from "react-icons/md";
function FormPage() {
  const [newSupp, setSupp] = useState({
    name: "",
    comapny: "",
    phone: "",
    email: "",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(newSupp)
    await createSupp()
  };
  const createSupp = async () => {
    const res = await fetch("/api/invitados", {
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
    <div className="h-screen w-screen flex flex-col bg-black items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <div className="py-2">
            <label
              htmlFor="name"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="name"
                name="name"
                className="peer mx-2 h-[40px] w-[300px] border-none bg-transparent placeholder-transparent focus:border-transparent text-white focus:outline-none focus:ring-0"
                placeholder="Nombre"
                onChange={handleChange}
              />

              <span className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Nombre
              </span>
            </label>
          </div>
          <div className="py-2">
            <label
              htmlFor="company"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="company"
                name="company"
                className="peer mx-2 h-[40px] w-[300px] border-none bg-transparent text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Nombre comercial de la empresa"
                onChange={handleChange}
              />

              <span className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Nombre comercial de la empresa
              </span>
            </label>
          </div>
          <div className="py-2">
            <label
              htmlFor="phone"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="tel"
                id="phone"
                name="phone"
                className="peer mx-2 h-[40px] w-[300px] border-none text-white bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Número de teléfono de contacto"
                onChange={handleChange}
              />

              <span className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Número de teléfono de contacto
              </span>
            </label>
          </div>
          <div className="py-2">
            <label
              htmlFor="email"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="email"
                id="email"
                name="email"
                className="peer mx-2 h-[40px] w-[300px] text-white border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Correo Electrónico"
                onChange={handleChange}
              />

              <span className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Correo Electrónico
              </span>
            </label>
          </div>
          <button className="p-2 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Registrar
          </button>
        </div>
      </form>
      <div className="py-10">
        <Link href={"/"}>
          <div className=" bg-red-600 rounded-full h-10 w-10 flex items-center ">
            {" "}
            <IconContext.Provider value={{ color: "white", size: "3em" }}>
              <MdOutlineCancel />
            </IconContext.Provider>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default FormPage;
