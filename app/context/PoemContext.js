"use client"
import React, { createContext, useState,useEffect } from 'react';


// Create the context
const PoemContext = createContext();

// Create a provider component
const PoemProvider = ({ children }) => {
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        fetch("https://back-2qdp.onrender.com/poems")
          .then((response) => response.json())
          .then((data) => {
            setPoems(data.sort((a, b) => new Date(b.date) - new Date(a.date)))})
          .catch((error) => console.error(error));
      }, []);

      const handleSubmit = async (e,Poem) => {
        e.preventDefault()
        try {
            const res = await fetch("https://back-2qdp.onrender.com/addPoem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Poem),
            })
            const data = await res.json()
            console.log(data)
            setPoems({
                title: "",
                body: "",
            })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <PoemContext.Provider value={{ poems, handleSubmit }}>
            {children}
        </PoemContext.Provider>
    );
};

export { PoemContext, PoemProvider };