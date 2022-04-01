import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home"
import {HeaderOffCanvas} from "./Componentes/Header/HeaderOffCanvas";

function App (){
    return(
        <BrowserRouter>
            <HeaderOffCanvas/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {App}