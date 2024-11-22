"use client"
import React,{useState,useEffect} from 'react'
import { useParams } from "next/navigation";
import ScaleButtons from '../components/ScaleButtons';

const Page = () => {
    const {slug} = useParams()
    const [poem, setPoem] = useState(null)
    useEffect(() => {
        if (poem) {
            document.title = poem.title;
        }
    }, [poem])
    useEffect(() => {
        fetch(`https://back-2qdp.onrender.com/poem/${slug}`)
        .then(response => response.json())
        .then(data => setPoem(data))
    }, [slug])

return (<>
    <div className="min-h-screen p-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 underline text-center">{poem ? poem.title : "Loading..."}</h1>
        <div className="max-w-4xl leading-relaxed text-center poem-text">
                <p className='poem-text-p' dangerouslySetInnerHTML={{ __html: poem ? poem.body.replace(/\n/g, "<br>") : "Loading..." }}></p>
        </div>
        <ScaleButtons />
    </div>
</>
)
}




export default Page
