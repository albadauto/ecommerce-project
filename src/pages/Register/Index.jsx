import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import "./style.css";
export default function Register() {
    return (
        <Container className="border border-dark container-main-register">
            <Row>
                <Col className='title1 text-center'>
                    Registre-se e participe da nossa comunidade!
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={6}>
                    <Form.Control placeholder="Nome" />
                </Col>
                <Col xs={6}>
                    <Form.Control placeholder="Email" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={6}>
                    <Form.Control placeholder="Senha" type="password" />
                </Col>
                <Col xs={6}>
                    <Form.Control placeholder="Repita a senha" type="password" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={3}>
                    <Form.Control placeholder="Endereço" />
                </Col>
                <Col xs={3}>
                    <Form.Control placeholder="Complemento" />
                </Col>

                <Col xs={3}>
                    <Form.Control placeholder="Bairro" />
                </Col>
                <Col xs={3}>
                    <Form.Select>
                        <option>Selecione o Estado</option>
                    </Form.Select>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={6}>
                    <Form.Control placeholder="CPF" type="password" />
                </Col>
                <Col xs={6}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Eu aceito os termos de contrato da PLX"
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Col className='text-center'>
                    <Button className="btn-enviar">Registrar</Button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col className="text-center">
                    Já tem conta no site? <a href="/login">Entrar</a>
                </Col>
            </Row>
        <br />


        </Container>
    )
}
