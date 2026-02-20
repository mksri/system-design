import { Navigate , Outlet } from "react-router-dom";
import { useState } from "react";

// For chcking the authentication

const Auth = () =>{

const [isAuth , setIsAuth] = useState(false);

 
return(
<div>
    {isAuth ? <Outlet/> : <Navigate to="/login"/>}
        </div>
    )
}

export default Auth;