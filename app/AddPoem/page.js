"use client"
import React,{useState,useEffect} from 'react'

const Page = () => {
    const [Poem, setPoem] = useState(
        {
            title: "",
            body: "",
            password:"",
        }
    )

    const handleSubmit = async (e) => {
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
            setPoem({
                title: "",
                body: "",
            })
        } catch (error) {
            console.error(error)
        }
    }

return (
    <>
            <form className="max-w-lg mx-auto p-4 bg-gray-800 shadow-md rounded mt-5">
                    <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-200 font-bold mb-2">Title:</label>
                            <input
                                    type="text"
                                    id="title"
                                    name='title'
                                    value={Poem.title}
                                    onChange={(e) => setPoem({ ...Poem, title: e.target.value })}
                                    className="w-full px-3 py-2 border rounded text-black"
                            />
                    </div>
                    <div className="mb-4">
                            <label htmlFor="body" className="block text-gray-200 font-bold mb-2">Body:</label>
                            <textarea
                                    type="text"
                                    id="body"
                                    name='body'
                                    value={Poem.body}
                                    onChange={(e) => setPoem({ ...Poem, body: e.target.value })}
                                    className="w-full px-3 py-2 border rounded text-black min-h-[200px]"
                            />
                    </div>
                    <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-200 font-bold mb-2">Password:</label>
                            <input
                                    type="password"
                                    id="password"
                                    name='password'
                                    value={Poem.password}
                                    onChange={(e) => setPoem({ ...Poem, password: e.target.value })}
                                    className="w-full px-3 py-2 border rounded text-black"
                            />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                    </button>
            </form>
    </>
)
}

export default Page
