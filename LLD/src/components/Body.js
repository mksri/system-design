import { useEffect , useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";


const Body = () =>{

   const [meme, setMeme] = useState([]);
   const [showShimmer, setShowShimmer] = useState(false)

    useEffect(() =>{
        fetchMeme();
        window.addEventListener("scroll", handleScroll);

       // return () => window.removeEventListener("scroll", handleScroll);

    },[]);

    const handleScroll = () => {

        if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
           fetchMeme();
        }       

    }


    const fetchMeme = async() => {

        setShowShimmer(true);

        const data = await fetch("https://meme-api.com/gimme/20");
        const json = await data.json();
        console.log(json);

         setShowShimmer(false);

        setMeme((meme) => [...meme, ...json.memes]);


    }

    return(
     <div className="flex flex-wrap gap-4 mt-20">       
        {meme.map((m , i) => 
            <MemeCard key={i} data={m}/>
        )} 

        {showShimmer && <Shimmer/>}

        </div>
    )
}

export default Body;