"use client";
import { useState } from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { MdOutlineCancel } from "react-icons/md";

async function Form() {
  const [name, setNombre] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setTelefono] = useState("");
  const [email, setCorreo] = useState("");
  const [product, setProduct] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/invitados", {
      method: "POST",
      body: JSON.stringify({
        name,
        company,
        phone,
        email,
        product,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  const InputField = ({ id, placeholder, type, handleChange }) => {
    return (
      <div className="py-2">
        <label
          htmlFor={id}
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type={type}
            id={id}
            className="peer mx-2 h-[40px] w-[300px] border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder={placeholder}
            onChange={handleChange}
          />

          <span className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            {placeholder}
          </span>
        </label>
      </div>
    );
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <InputField
            id={"name"}
            placeholder={"Nombre"}
            type={"text"}
            onChange={(e) => setNombre(e.target.value)}
          />
          <InputField
            id={"company"}
            placeholder={"Nombre comercial de la empresa"}
            type={"text"}
            onChange={(e) => setCompany(e.target.value)}
          />
          <InputField
            id={"phone"}
            placeholder={"Número de teléfono de contacto"}
            type={"tel"}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <InputField
            id={"email"}
            placeholder={"Correo Electrónico"}
            type={"email"}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <InputField
            id={"product"}
            placeholder={"Productos"}
            type={"text"}
            onChange={(e) => setProduct(e.target.value)}
          />
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
export default Form;
