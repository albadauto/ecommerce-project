import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import "./style.css";
export default function MyAccount() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    function hasIdSession() {
        if (!sessionStorage.getItem("id")) {
            navigate("/login");
        }
    }
    hasIdSession();
    function handleLogout(){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
        navigate("/");
    }
    useEffect(() => {
        api.get(`/user/findById/${sessionStorage.getItem("id")}`).then((res) => {
            setUserData([res.data.result]);
        })
    }, [])
    return (
        <Container className='container-main-myaccount'>
            <Row>
                <Col className=" text-center">
                    <label htmlFor="" className="title1">Dados da conta</label>
                </Col>
            </Row>
            <br />
            {userData.map((val) => {
                return (
                    <>
                        <Row>
                            <Col xs={6}>
                                <FloatingLabel label="Nome">
                                    <Form.Control value={val.name_user} disabled />
                                </FloatingLabel>

                            </Col>
                            <Col xs={6}>
                                <FloatingLabel label="Email">
                                    <Form.Control value={val.email} disabled />
                                </FloatingLabel>

                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={6}>
                                <FloatingLabel label="CPF">
                                    <Form.Control value={val.cpf} disabled />
                                </FloatingLabel>

                            </Col>
                            <Col xs={6}>
                                <FloatingLabel label="Telefone">
                                    <Form.Control value={val.phone} disabled />
                                </FloatingLabel>

                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={4}>
                                <FloatingLabel label="Endereço">
                                    <Form.Control value={val.address} disabled />
                                </FloatingLabel>

                            </Col>
                            <Col xs={4}>
                                <FloatingLabel label="Numero">
                                    <Form.Control value={val.number} disabled />
                                </FloatingLabel>

                            </Col>
                            <Col xs={4}>
                                <FloatingLabel label="Cidade">
                                    <Form.Control value={val.city} disabled />
                                </FloatingLabel>

                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={4}>
                                <FloatingLabel label="Bairro">
                                    <Form.Control value={val.district} disabled />
                                </FloatingLabel>

                            </Col>
                            <Col xs={4}>
                                <FloatingLabel label="UF">
                                    <Form.Control value={val.uf} disabled />
                                </FloatingLabel>

                            </Col>
                            <Col xs={4}>
                                <FloatingLabel label="Cidade">
                                    <Form.Control value={val.complement} disabled />
                                </FloatingLabel>

                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="text-center">
                                <Button variant='danger' onClick={() => handleLogout()}>Sair</Button>
                            </Col>
                        </Row>
                    </>

                )
            })}

        </Container>
    )
}
