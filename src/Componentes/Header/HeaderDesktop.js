import React from "react";
import {NavLink} from "react-router-dom";
import {Col, Container, Nav, Row} from "react-bootstrap";
import "./CSS/Header.css"

function HeaderDesktop() {
    return (
        <div id="Header Desktop">
            <Container className="HideHeaderDesktop">
                <Row>
                    <Col>
                        <Nav>
                            <Container fluid="md">
                                <Row>
                                    <Col sm={2}>
                                        <NavLink className="HeaderTopScreen" to="/"> Nosotros </NavLink>
                                    </Col>
                                    <Col sm={{span: "auto", offset: 6}}>
                                        <a className="HeaderTopScreen UbicacionGoogleMaps"
                                           href="https://www.google.com/maps/place/El+Cortijo,+Engativ%C3%A1,+Bogot%C3%A1/@4.7214939,-74.1323184,14z/data=!3m1!4b1!4m5!3m4!1s0x8e3f84a491ebe9ff:0xa6737bdf6cfc045a!8m2!3d4.7214942!4d-74.1147659?hl=es">
                                            Ubicación
                                        </a>
                                    </Col>
                                    <Col sm={0}>
                                        <NavLink className="HeaderTopScreen" to="/"> Contactenos </NavLink>
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

export {HeaderDesktop}