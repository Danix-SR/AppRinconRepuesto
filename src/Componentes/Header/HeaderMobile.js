import React from "react";
import {NavLink} from "react-router-dom";
import {Col, Container, Nav, Row} from "react-bootstrap";
import "./CSS/Header.css"

function HeaderMobile() {
    return (
        <div id="Header Mobile">
            <Container>
                <Row>
                    <Col>
                        <Nav>
                            <Container fluid="md">
                                <Col>
                                    <Row>
                                        <NavLink className="HeaderTopScreen" to="/"> Nosotros </NavLink>
                                    </Row>
                                    <Row>
                                        <a className="HeaderTopScreen UbicacionGoogleMaps"
                                           href="https://www.google.com/maps/place/El+Cortijo,+Engativ%C3%A1,+Bogot%C3%A1/@4.7214939,-74.1323184,14z/data=!3m1!4b1!4m5!3m4!1s0x8e3f84a491ebe9ff:0xa6737bdf6cfc045a!8m2!3d4.7214942!4d-74.1147659?hl=es">
                                            Ubicación
                                        </a>
                                    </Row>
                                    <Row>
                                        <NavLink className="HeaderTopScreen" to="/"> Contactenos </NavLink>
                                    </Row>
                                </Col>
                            </Container>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Container>
                                <Row>
                                    <Col>
                                        <a href="/">Middle 1</a>
                                    </Col>
                                    <Col>
                                        <a href="/">Middle 2</a>
                                    </Col>
                                </Row>
                            </Container>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Container>
                                <Row>
                                    <Col>
                                        <a href="/">Bottom 1</a>
                                    </Col>
                                    <Col>
                                        <a href="/">Bottom 2</a>
                                    </Col>
                                </Row>
                            </Container>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export {HeaderMobile}