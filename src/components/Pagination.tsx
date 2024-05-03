"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "@apollo/client";
import { useState } from "react";

const query = gql`
  query Query($page: Int!, $perPage: Int!) {
    booksPerPage(page: $page, perPage: $perPage) {
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

const Pagination = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const { data } = useSuspenseQuery<{ booksPerPage: Book[] }>(query, {
    variables: { page, perPage },
  });
  //   console.log(data);
  const handleNext=()=>{
    
      setPage(page+1)
    
  }
  const handlePre=()=>{
    if(page <= 1){
      setPage(page-1)
    }
    setPage(1)
  }

  return (
    <main>
      <h1 className="text-center text-3xl font-bold text-green-500 my-10">
        Books Pagination
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
            {data?.booksPerPage?.map((book: Book, idx: number) => (
              <tr key={idx} className="border-b ">
                <td className="py-3 px-5">{idx + 1}</td>
                <td className="py-3 px-5">{book.author}</td>
                <td className="py-3 px-5">{book.title}</td>
                <td className="py-3 px-5">{book.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="max-w-[400px] flex gap-6">
          <button onClick={()=>handlePre()}>pre</button>
          <button onClick={()=>handleNext()}>next</button>
        </div>
      </div>
    </main>
  );
};

export default Pagination;
