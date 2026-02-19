import { useEffect , useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";


const Body = () =>{

   const [meme, setMeme] = useState("");

    useEffect(() =>{
        fetchMeme();

    },[]);


    const fetchMeme = async() => {

        const data = await fetch("https://meme-api.com/gimme/20");
        const json = await data.json();
        console.log(json);
        setMeme(json);


    }

   if(meme == "" ) return <Shimmer/>

    return(
     <div className="flex flex-wrap gap-4">       
        {meme.memes.map((m , i) => 
            <MemeCard key={i} data={m}/>
        )} 

        </div>
    )
}

export default Body;