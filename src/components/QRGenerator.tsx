import React, { useRef } from 'react';
import QRCode from 'qrcode';

function QRGenerator({ text, name }) {
  const qrRef = useRef(null);

  const generateQR = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      qrRef.current.src = url;
      const link = document.createElement('a');
      link.download = `${name}QR.png`;
      link.href = qrRef.current.src;
      link.click();
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = `${name}.png`;
    link.href = qrRef.current.src;
    link.click();
  };

  return (
    <div>
      <img ref={qrRef} alt="QR Code" />
      <button onClick={() => { generateQR(); }}>Generar QR</button>
    </div>
  );
}

export default QRGenerator;
