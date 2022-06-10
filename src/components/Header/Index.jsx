import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './style.css';
export default function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Container className='nav-main'>
                <Navbar.Brand href="/">PLX</Navbar.Brand>
                <Nav className="flex-row">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Anúncios</Nav.Link>
                    <Nav.Link href="/login">Entrar</Nav.Link>
                    <div className='anunciar-st'>
                        <Nav.Link href="/announces" className='ann'>Anunciar</Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}
