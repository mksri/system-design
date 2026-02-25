import Body from "./Body";
import { Link } from "react-router-dom";
import { useState } from 'react';


const Header = () =>{


    const [lang, setLang] = useState("");


    return(

     <div className="text-2xl font-bold m-2 h-30 text-center border-0 bg-black text-white shadow-2xl">
        <h3 className="py-0.5 px-0.5">Meme Page </h3>  
        <select value={lang} className="text-sm mr-300 mt-6" onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
        </select>
        <nav className="flex gap-4 ml-250 text-sm cursor-pointer"> 
            <Link to="/">Home</Link>
            <Link to="/about"> About </Link>
            <Link to="/login">Login </Link>
           <Link to="/accordian">Accordian</Link>
           <Link to="/comment">Comment</Link>
        </nav>  
        </div>
    )
}

export default Header;