import React, { createContext, useContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HeaderContext, useAuth } from '../../providers/auth';
import './style.css';


export default function Header() {
    const { bar, setBar } = useAuth();
    function verifyIsLogged(){
        if (!sessionStorage.getItem("token")){
            setBar({url: "/Login", title:"Entrar"})
        }else{
            setBar({url: "/MyAccount", title:"Minha conta"})
        }
    }
    verifyIsLogged();
    return (
        <Navbar bg="light" variant="light">
            <Container className='nav-main'>
                <Navbar.Brand href="/">PLX</Navbar.Brand>
                <Nav className="flex-row">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Anúncios</Nav.Link>
                    <Nav.Link href={bar.url}>{bar.title}</Nav.Link>
                    
                    <div className='anunciar-st'>
                        <Nav.Link href="/announces" className='ann'>Anunciar</Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}
