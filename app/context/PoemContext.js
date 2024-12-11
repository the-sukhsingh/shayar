"use client"
import React, { createContext, useState,useEffect } from 'react';


// Create the context
const PoemContext = createContext();

// Create a provider component
const PoemProvider = ({ children }) => {
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        fetch("/api/poem")
          .then((response) => response.json())
          .then((data) => {
            setPoems(data)})
          .catch((error) => console.error(error));
      }, []);

      const handleSubmit = async (e,Poem) => {
        e.preventDefault()
        try {
            const res = await fetch("/api/poem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Poem),
            })
            const data = await res.json()
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