"use client";

import { useParams } from "next/navigation";
import data from "../book .json";
import Image from "next/image";

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

export default function generoPage() {
  const params = useParams();
  const matches: Book[] = books.filter(
    (book) => book.genre === params.generoName
  );
  // console.log(params.generoName);
  console.log(matches);
  return (
    <div className="flex flex-wrap justify-center items-center m-auto">
      {matches.map((book) => {
        return (
          <div className="" key={book.ISBN}>
            <Image
              src={book.cover}
              alt="Imagen libro"
              width={200}
              height={300}
            />
            <span className="cursor-pointer px-4 text-white">{book.title}</span>
          </div>
        );
      })}
    </div>
  );
}
