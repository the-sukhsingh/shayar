"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [poems, setPoems] = useState(null)

  useEffect(() => {
    fetch("https://back-2qdp.onrender.com/poems")
      .then(response => response.json())
      .then(data => setPoems(data))
  }, [])


  return (
    <div className="w-screen">
      <div className="w-full p-3 md:w-4/5 m-auto md:grid md:grid-cols-2 md:gap-3">
        {poems ? <>
          {poems.map(poem => (
            <Link href={`/${poem.slug}` } key={poem._id} >
            <div className="
            bg-slate-600
              shadow-xl
              p-4
              text-2xl
              my-4
              transition-all
              hover:shadow-md
              cursor-pointer
              rounded-lg
              hover:bg-gray-100
              hover:text-black
            ">
              <h2>{poem.title}</h2>               
            </div>
              </Link>
          ))}
        </> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Page;
