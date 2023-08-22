"use client";

import Image from "next/image";
import data from "../book.json";

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Author {
  name: string;
  otherBooks: string[];
}

const books: Book[] = data.library.map((data) => data.book);

export default function favoritosPage() {
  const favoritos: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const readList: Book[] = books.filter((book) =>
    favoritos.includes(book.ISBN)
  );

  console.log(readList);

  return (
    <div className="flex flex-wrap justify-center items-center m-auto">
      {readList.map((book) => {
        return (
          <div
            className="w-[30%] h-auto flex flex-col gap-2 m-auto items-center"
            key={book.ISBN}
          >
            <Image
              className="cursor-pointer"
              src={book.cover}
              alt="Imagen libro"
              width={200}
              height={300}
            />
            <span className="px-4 text-white">
              {`${favoritos.includes(book.ISBN) ? "🏆 " : ""}`}
              {book.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
