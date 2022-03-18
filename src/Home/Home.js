import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

const LinkURL = 10;
function Home () {
    return(
        <div>
            <h1>Aplicaction</h1>
            <h6>Redirijir con Link</h6>
            <ul>
                <li>
                    <Link to="/about"> Usuarios </Link>
                </li>
                <li>
                    <Link to={`/User/${LinkURL}`}> LinkURL </Link>
                </li>
            </ul>
        </div>
    );
}

export {Home}