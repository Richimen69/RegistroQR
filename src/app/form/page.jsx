import InputField from "@/components/Input";
import Link from "next/link";
async function Form() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <form>
        <div className="flex flex-col items-center justify-center">
          <InputField id={"name"} placeholder={"Nombre"} type={"text"} />
          <InputField id={"major"} placeholder={"Cargo"} type={"text"} />
          <InputField id={"phone"} placeholder={"Telefono"} type={"tel"} />
          <InputField id={"email"} placeholder={"Email"} type={"email"} />
          <button className="p-2 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Registrar
          </button>
        </div>
      </form>
      <div className="py-10">
        <Link href={"/"}>
          <div className=" bg-red-600 p-2 rounded-full h-10 w-10 text-center">X</div>
        </Link>
      </div>
    </div>
  );
}
export default Form;
