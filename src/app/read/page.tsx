'use client'
import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

function App() {
  const [apiResult, setApiResult] = useState(null);

  const handleScan = async (data) => {
    if (data) {

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
    <div className='w-full'>
      <Scanner
        onResult={handleScan}
        onError={handleError}
      />
      {apiResult && (
        <div>
          <p>Nombre: {apiResult.name}</p>
          <p>Empresa: {apiResult.company}</p>
          <p>Telefono: {apiResult.phone}</p>
          <p>Correro Electronico: {apiResult.email}</p>
          <p>Productos de interes: {apiResult.product}</p>
        </div>
      )}
    </div>
  );
}

export default App;


