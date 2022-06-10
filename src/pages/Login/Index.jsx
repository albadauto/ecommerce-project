import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import "./style.css";

export default function Login() {
  return (
    <Container className="text-center">
        <Row>
            <Col className="title1">
                Bem vindo(a) à PLX, entre com sua conta ou Registre-se
            </Col>
        </Row>
        <br />

        <div className="form-login border border-dark">

            
            <Form.Control placeholder="Email"/>
            <br/>
            <Form.Control placeholder="Senha" type="password"/>
            <Row>
                <Col>
                    Não tem conta ainda? <Link>Registre-se Já!</Link>
                </Col>
            </Row>
            <br/>
            <Button className="btn-enviar"> Logar</Button>
        </div>


    </Container>
  )
}
