import React from "react";
import {Container, Navbar, Offcanvas, Image} from 'react-bootstrap'
import {HeaderDesktop} from "./HeaderDesktop"
import {HeaderMobile} from "./HeaderMobile"
import BurgerMenu from "../../Imagenes/Iconos SGV/Burger Menu.svg"

function HeaderOffCanvas () {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>   {/* Con fluid coloca el boton fijo en la parte izquierda*/}

                    <Navbar.Toggle id="ButtonNavbar" >
                        <Image src={BurgerMenu} fluid alt="Logo"/>
                    </Navbar.Toggle>

                    <HeaderDesktop/>

                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start" >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <HeaderMobile/>
                        </Offcanvas.Body>

                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export {HeaderOffCanvas}