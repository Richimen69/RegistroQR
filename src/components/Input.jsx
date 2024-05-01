import React from "react";

const InputField = ({ id, placeholder, type }) => {
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
        />

        <span className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default InputField;
