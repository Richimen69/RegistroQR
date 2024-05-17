import React, { useState, useEffect } from "react";
import { MdQrCode } from "react-icons/md";
import QRGenerator from "./QRGenerator";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BD: React.FC<{ consulta: string }> = ({ consulta }) => {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${consulta}`);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error("Error al obtener datos de MongoDB:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="pb-10">
      <table className="divide-y divide-gray-200 table-auto">
        <thead className="bg-gray-800">
          <tr>
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              Nombre
            </th>
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              Empresa
            </th>
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              Teléfono
            </th>
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              Correo Electrónico
            </th>
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              Productos
            </th>
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              Pago
            </th>
            {consulta === "proveedores" ? (
              <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
                Stand
              </th>
            ) : null}
            <th className="md:px-6 mx-1 py-3 text-left md:text-xs md:font-medium text-xs font-normal text-white uppercase tracking-wider">
              QR
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-700 divide-y divide-gray-200">
          {tableData.map((item) => (
            <tr key={item._id}>
              <Link href={`/datos/${item._id}`}>
                <td className="md:px-6 px-1 font-normal text-xs py-4 w-40 text-white">
                  {item.name}
                </td>
              </Link>
              <td className="md:px-1 px-1 font-normal text-xs py-4 w-40 text-white">
                {item.company}
              </td>
              <td className="md:px-1 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">
                {item.phone}
              </td>
              <td className="md:px-1 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">
                {item.email}
              </td>
              <td className="md:px-1 px-1 font-normal text-xs py-4 w-40 text-white">
                {item.product}
              </td>
              <td className="text-center md:px-1 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">
                {item.pago}
              </td>
              {consulta === "proveedores" ? (
                <td className="text-center md:px-1 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">
                  {item.stand}
                </td>
              ) : null}
              <td className="md:px-1 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">
                <button>
                  <QRGenerator text={item._id} name={item.name.toString()} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BD;
