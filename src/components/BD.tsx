import React, { useState, useEffect } from 'react';

const BD: React.FC<{ consulta: string }> = ({ consulta }) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${consulta}`);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error al obtener datos de MongoDB:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
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
          </tr>
        </thead>
        <tbody className="bg-gray-700 divide-y divide-gray-200">
          {tableData.map((item) => (
            <tr key={item._id}>
              <td className="md:px-6 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">{item.name}</td>
              <td className="md:px-6 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">{item.company}</td>
              <td className="md:px-6 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">{item.phone}</td>
              <td className="md:px-6 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">{item.email}</td>
              <td className="md:px-6 px-1 font-normal text-xs py-4 md:whitespace-nowrap text-white">{item.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BD;
