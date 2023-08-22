"use client";
import Image from "next/image";
import data from "./book.json";
import { useEffect, useState } from "react";

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

interface Props {
  searchParams: {
    genre: string;
  };
}

const books: Book[] = data.library.map((data) => data.book);

export default function Home({ searchParams: { genre } }: Props) {
  const matches: Book[] = books.filter((book) => book.genre === genre);
  const [enFavoritos, setEnFavoritos] = useState(false);
  const favoritos: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const handleSubmit = (idMovie: string | undefined) => {
    let updatedFavoritos: string[] = [...favoritos];
    if (idMovie !== undefined) {
      if (updatedFavoritos.includes(idMovie)) {
        updatedFavoritos = updatedFavoritos.filter(
          (movieId) => movieId !== idMovie
        );
      } else {
        updatedFavoritos.push(idMovie);
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavoritos));
    }
    setEnFavoritos(!enFavoritos);
  };

  return (
    <div className="flex flex-wrap justify-center items-center m-auto">
      {genre
        ? matches.map((book) => {
            return (
              <div className="" key={book.ISBN}>
                <Image
                  className="cursor-pointer"
                  src={book.cover}
                  alt="Imagen libro"
                  width={200}
                  height={300}
                  onClick={() => handleSubmit(book.ISBN)}
                />
                <span className="cursor-pointer px-4 text-white">
                  {`${favoritos.includes(book.ISBN) ? "🏆 " : ""}`}
                  {book.title}
                </span>
              </div>
            );
          })
        : books.map((book) => {
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
                  onClick={() => handleSubmit(book.ISBN)}
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
