"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white w-full h-9 mb-3 px-2 py-2">
      <ul className="flex gap-6 w-auto h-auto ">
        <li>
          <Link href="/">🐱‍👓 MiduLibros</Link>
        </li>
        <ul className="flex flex-col justify-center items-center group">
          <li>Generos </li>
          <ul className="flex-col justify-center items-center hidden group-hover:block cursor-pointer bg-white text-black z-50">
            <li className="hover:bg-gray-500 px-7 hover:text-white">
              <Link href={{ pathname: "/", query: { genre: "Fantasía" } }}>
                Fantasía
              </Link>
            </li>
            <li
              // onClick={() => handleClick("Ciencia ficción")}
              className="hover:bg-gray-500 px-7 hover:text-white"
            >
              <Link
                href={{ pathname: "/", query: { genre: "Ciencia ficción" } }}
              >
                Ciencia ficción
              </Link>
            </li>
            <li
              // onClick={() => handleClick("Zombies")}
              className="hover:bg-gray-500 px-7 hover:text-white"
            >
              <Link href={{ pathname: "/", query: { genre: "Zombies" } }}>
                Zombies
              </Link>
            </li>
            <li
              // onClick={() => handleClick("Terror")}
              className="hover:bg-gray-500 px-7 hover:text-white"
            >
              <Link href={{ pathname: "/", query: { genre: "Terror" } }}>
                Terror
              </Link>
            </li>
          </ul>
        </ul>
        <li>
          <Link href="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
}
