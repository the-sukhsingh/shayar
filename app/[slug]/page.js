"use client"
import React,{useState,useEffect, use} from 'react'
import { useParams } from "next/navigation";
import ScaleButtons from '../components/ScaleButtons';
import { PoemContext } from '../context/PoemContext';
import AddPoem from '../components/AddPoem';


const Page = () => {
    const { poems } = React.useContext(PoemContext);
    const { slug } = useParams();

    const [poem, setPoem] = useState(null);
    useEffect(() => {
        if(slug == "Addpoem"){
            return <AddPoem/>
        }
        if (poems) {
            const poem = poems.find((poem) => 
            {
                return poem.slug == decodeURIComponent(slug)});
            setPoem(poem);
            document.title = poem.title;
        }
    }, [poems, slug]);


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
