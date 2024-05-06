"use client";

import React from "react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query GetCurrentLoggedInUser {
    getCurrentLoggedInUser {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Navbar = () => {
  // const token = localStorage?.getItem("authorization");

  //   const {  data } = useSuspenseQuery<{ getCurrentLoggedInUser: User }>(query, {
  //     context: {
  //       headers: {
  //         authorization: token,
  //       },
  //     },
  //   });

  return (
    <div className="py-5 bg-green-100">
      <div className="max-w-7xl px-8 mx-auto flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-green-500">Graphql</h1>
        </div>
        <div>
          {/* {data ? (
            <h1 className="text-xl font-semibold text-green-500">{data.getCurrentLoggedInUser.firstName}</h1>
          ) : (
            <h1 className="text-xl font-semibold text-green-500">User</h1>
          )} */}
          <h1 className="text-xl font-semibold text-green-500">User</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
