import Body from "./Body";
import { Link } from "react-router-dom";

const Header = () =>{
    return(

     <div className="text-2xl font-bold m-2 h-20 text-center border-0 bg-black text-white shadow-2xl">
        <h3 className="py-0.5 px-0.5">Meme Page </h3>  
        <nav className="flex gap-4 ml-300 text-sm"> 
            <Link to="/">Home</Link>
            <Link to="/about"> About </Link>
            <Link to="/login">Login </Link>
        </nav>  
        </div>
    )
}

export default Header;