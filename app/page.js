"use client";
import React from "react";
import Link from "next/link";

import { PoemContext } from "./context/PoemContext";

const Page = () => {
  const { poems } = React.useContext(PoemContext);

  return (
    <div className="">
      <div className="w-full p-3 md:w-4/5 m-auto md:grid md:grid-cols-2 md:gap-3">
        {poems && (
          <>
            {poems.map((poem) => (
              <Link href={`/${poem.slug}`} key={poem._id}>
                <div
                  className="
            title-block
              shadow-xl
              p-4
              text-2xl
              my-4
              transition-all
              cursor-pointer
            "
                >
                  <h2>{poem.title}</h2>
                </div>
              </Link>
            ))}
          </>
        ) }
      </div>
    </div>
  );
};

export default Page;
