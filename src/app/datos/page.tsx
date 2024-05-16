"use client";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Datos() {
  const [apiResult, setApiResult] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const searchData = useSearchParams();
  const router = useRouter();
  const id = searchData.get("user");
  useEffect(() => {

    const BD = async () => {
      const response = await fetch(`/api/invitados/${id}`);
      const apiData = await response.json();

      // Almacena el resultado de la API en el estado
      setApiResult(apiData);

      // Haz algo con el resultado de la API
      console.log(apiData);
      setIsChecked(apiData.pago==="Pagado")   
    };
    BD();
  }, []);
  const [newSupp, setSupp] = useState({
    pago: "Sin pago",
  });
  const handleChange = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked) {
      setSupp({ ...newSupp, pago: e.target.value });
    } else {
      setSupp({ ...newSupp, pago: "Sin pago" });
    }
  };
  const red = () => {
    router.push("/bdInvitados");
  };

  const addPago = async () => {
    try {
      await fetch(`/api/invitados/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSupp),
      });
    } catch (error) {
      console.log(error)
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(newSupp)
    await addPago()
    Swal.fire({
        title: "Actualizado Correctamente",
        text: "Presiona para continuar",
        icon: "success"
    });
    //red()
};
  return (
    <div className="h-screen w-full bg-principal flex flex-col items-center justify-center">
      <div className="bg-tertiary md:w-2/6 h-auto items-center flex flex-col rounded-3xl border border-black w-4/6">
        <div className="p-6 flex flex-col items-center">
          <p className="text-primary text-xl">{apiResult?.name}</p>
          <p className="text-primary text-xl">{apiResult?.company}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-5">
            <p className="text-primary text-lg">Pago registrado</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={handleChange}
                value="Pagado"
                checked = {isChecked}
                className="sr-only peer"
              />
              <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-12 h-12 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
            </label>
          </div>
          <div className="flex py-5 items-center justify-center ">
            <button className="bg-primary px-3 py-2 rounded-xl hover:opacity-80">
              <p className="text-white text-xl">Aceptar</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
