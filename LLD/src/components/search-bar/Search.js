import { useEffect , useState } from "react";

const Search = () =>{


    const [searchData , setSearchData] = useState([]);
    const [searchTerm, setSearchTerm ] = useState('');
    const [cache, setCache] = useState({});
    const [isVisible , setIsVisible] = useState(false);

    useEffect(() =>{

        const timer = setTimeout(() =>{
            fetchSearchData();
        } , 300);

        return () => {
          clearTimeout(timer);  
        }
       


    },[searchTerm]);


    const fetchSearchData = async () =>{

        if(cache[searchTerm]){
            setSearchData(cache[searchTerm]);
            return;
        }
        else{

        const data = await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchTerm}`);
       
        const json = await data.json();
        setSearchData(json[1]);
         setIsVisible(true);
        setCache((prev) => ({
            ...prev,
            [searchTerm]: json[1]
        }));
       
    }
}

    return(
        <div className="m-10">
           <input 
           className="border border-black p-2 w-96" 
           type="text"
           name="myInput" 
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
            />
       {isVisible && searchData.length > 1  && <ul className="border border-black p-2 w-96">
           {searchData.map((s , index) => <li className="hover:bg-gray-300 cursor-pointer" key={index}>{s}</li>)}
           </ul> }
        </div>
    )
}

export default Search;