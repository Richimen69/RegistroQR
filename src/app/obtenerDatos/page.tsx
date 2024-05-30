'use client'
import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

function App() {
  const [apiResult, setApiResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async (data) => {
    if (data) {
      setIsScanning(false); // detiene el escaneo después de obtener un resultado

      // Realiza una solicitud a la API con el resultado del escaneo
      const response = await fetch(`/api/invitados/${data}`);
      const apiData = await response.json();

      // Almacena el resultado de la API en el estado
      setApiResult(apiData);

      // Haz algo con el resultado de la API
      console.log(apiData);
    }
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div className='w-full bg-principal h-screen flex flex-col items-center justify-center'>
    {isScanning && (
      <Scanner
        onResult={handleScan}
        onError={handleError}
      />
    )}
    <div className='flex items-center justify-center'>
      <button className='bg-primary rounded-xl' onClick={() => setIsScanning(true)}><p className='text-white text-lg p-5'>Iniciar escaneo</p></button>
    </div>
    {apiResult ? (
      apiResult.name ? (
        <div className='py-5'>
          <p className='text-primary font-bold text-xl text-center p-1'>Nombre: {apiResult.name}</p>
          <p className='text-primary font-bold text-xl text-center p-1'>Empresa: {apiResult.company}</p>
          <p className='text-primary font-bold text-xl text-center p-1'>Telefono: {apiResult.phone}</p>
          <p className='text-primary font-bold text-xl text-center p-1'>Correro Electronico: {apiResult.email}</p>
          {apiResult.tipo === 'Proveedor' ? (
            <div>
            <p className='text-primary font-bold text-xl text-center p-1'>Giro: {apiResult.product}</p>
            </div>
          ) : (
            <p className='text-primary font-bold text-xl text-center p-1'>Productos de interes: {apiResult.product}</p>
          )}
        </div>
      ) : (
        <p className='text-red-700 font-bold text-3xl text-center p-5'>No está registrado</p>
      )
    ) : null}
  </div>
  );
}

export default App;



