import React from "react";
import {Container, Navbar, Offcanvas, Image} from 'react-bootstrap'
import {HeaderDesktop} from "./HeaderDesktop"
import {HeaderMobile} from "./HeaderMobile"
import BurgerMenu from "../../Imagenes/Iconos SGV/Burger Menu.svg"

function HeaderOffCanvas() {

    const [GetShowOffCanvas, SetShowOffCanvas] = React.useState(false)

    const onHideOffCanvas = () => {
        SetShowOffCanvas(false)
    }
    const onClickToggle = () => {
        SetShowOffCanvas(true)
    }

    const ResizeScreen = () => {
        const WidthScreen = document.documentElement.clientWidth;
        if (WidthScreen >= 992){
            SetShowOffCanvas(false)
        }
    }

    window.addEventListener('resize',ResizeScreen)

    return (
        <div id="HeaderOffCanvas" className="container-fluid">
            <Navbar bg="light" expand="lg">
                <Container fluid>   {/* Con fluid coloca el boton fijo en la parte izquierda*/}

                    <Navbar.Toggle
                        id="ButtonNavbar"
                        onClick={onClickToggle}
                    >
                        <Image src={BurgerMenu} fluid alt="Logo"/>
                    </Navbar.Toggle>

                    <HeaderDesktop/>
                    <Navbar.Offcanvas
                        show={GetShowOffCanvas}
                        onHide={onHideOffCanvas}
                    >

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