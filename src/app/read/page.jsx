'use client'
import React, { useRef } from 'react';
import QRCode from 'qrcode';

function QRGenerator() {
  const qrRef = useRef(null);
  const inputRef = useRef(null);

  const generateQR = async () => {
    const text = inputRef.current.value;
    try {
      const url = await QRCode.toDataURL(text);
      qrRef.current.src = url;
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrRef.current.src;
    link.click();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Texto para el código QR" />
      <button onClick={generateQR}>Generar QR</button>
      <img ref={qrRef} alt="Código QR" />
      <button onClick={downloadQR}>Descargar QR</button>
    </div>
  );
}

export default QRGenerator;