import Link from "next/link";
import DarkMode from "./darkmode";
import { auth } from "../utils/auth";
import RemoveCookie from "../utils/removeCookie";

export default function Navbar() {
  const app = auth()
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <nav className="flex flex-row justify-between items-center p-5 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-50">
        <h1 className="text-3xl font-extrabold flex justify-center">Leilão</h1>
        <div className="flex flex-row gap-6 items-center">
          <a className="text-xl font-bold cursor-pointer">Produtos</a>
          {app === null ? (
               <Link
               href="/login"
               className="text-xl font-bold cursor-pointer bg-blue-500 text-zinc-50 px-4 py-2 rounded-md"
             >
               Login
             </Link>
          ) : (
            ''
          )}
          {app === null ? (
            <Link
            href="/registro"
            className="text-xl font-bold cursor-pointer bg-green-500 text-zinc-50 px-4 py-2 rounded-md"
          >
            Registro
          </Link>
          ) : (
            ''
          )}
          {app === null ? '' : <RemoveCookie />}
          <DarkMode />
        </div>
      </nav>
    </>
  );
}
