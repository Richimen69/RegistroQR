import React, { useState } from "react";

const PasswordPromptDialog = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSubmit(password).catch(() => {
      setPasswordIncorrect(true);
      setLoading(false);   
    });
  };

  return (
    <div className="w-screen h-screen bg-principal flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="password" className="text-primary font-bold">
          Contraseña
        </label>
        <input
          className="rounded-lg p-2"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="p-5">
          <button className="bg-primary text-white hover:opacity-85 px-5 py-2 rounded-lg">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordPromptDialog;
