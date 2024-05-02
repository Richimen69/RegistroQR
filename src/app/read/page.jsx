'use client'
import React, { useRef } from 'react';
import jsQR from 'jsqr';

function QRReader() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const resultRef = useRef(null);

  const startScan = () => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        scanQR();
      });
  };

  const scanQR = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
    if (qrCode) {
      resultRef.current.textContent = qrCode.data;
    }
    requestAnimationFrame(scanQR);
  };

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={startScan}>Iniciar escaneo</button>
      <p ref={resultRef} />
    </div>
  );
}

export default QRReader;
