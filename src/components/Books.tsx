"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "@apollo/client";
import { VariablesAreInputTypesRule } from "graphql";

const query = gql`
  query Query($limit: Int) {
    getBooks(limit: $limit) {
      author
      title
      year
    }
  }
`;

interface Book {
  author: string;
  title: string;
  year: string;
}
const Books = () => {
  const { data } = useSuspenseQuery<{ getBooks: Book[] }>(query);
  //   console.log(data);
  return (
    <main>
      <h1 className="text-center text-3xl font-bold text-green-500 my-10">
        All Books
      </h1>
      <hr className="" />
      <div className="max-w-7xl mx-auto px-5 my-5">
        <table className="mx-auto">
          <thead>
            <tr className="border-b  ">
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">Author</th>
              <th className="py-3 px-5">Title</th>
              <th className="py-3 px-5">Year</th>
            </tr>
          </thead>
          <tbody>
            {data?.getBooks?.map((book: Book, idx: number) => (
              <tr key={idx} className="border-b ">
                <td className="py-3 px-5">{idx + 1}</td>
                <td className="py-3 px-5">{book.author}</td>
                <td className="py-3 px-5">{book.title}</td>
                <td className="py-3 px-5">{book.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Books;
