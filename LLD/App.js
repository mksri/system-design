import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route , BrowserRouter } from "react-router-dom";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Body from "./src/components/Body";
import ProtectedRoute from "./src/components/ProtectedRoute";
import Login from "./src/components/Login";


const App = () =>{

    return(

<BrowserRouter>
<Header/>
<Routes>
     <Route path="/" element={<Body/>}/>
    <Route element={<ProtectedRoute/>}>
    <Route path="/about" element={<About/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
</Routes>
</BrowserRouter> 
    )

}

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<App/>)
