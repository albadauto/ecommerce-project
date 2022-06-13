import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { api } from '../../api';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })
    function handleOnSubmit(e){
        e.preventDefault();
        api.post("/user/login", loginData).then((result) => {
            if(result.data.auth){
                sessionStorage.setItem("token", result.data.token);
                navigate("/")
            }
        }).catch(() => toast.error("Erro: Login ou senha incorretos!"));
    }
    return (
        <Form onSubmit={handleOnSubmit}>
        <Container className="text-center">
            <Row>
                <Col className="title1">
                    Bem vindo(a) à PLX, entre com sua conta ou Registre-seee
                </Col>
            </Row>
            <br />

            <div className="form-login border border-dark">


                <Form.Control placeholder="Email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email:e.target.value})}/>
                <br />
                <Form.Control placeholder="Senha" type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password:e.target.value})}/>
                <Row>
                    <Col>
                        Não tem conta ainda? <a href="/register">Registre-se Já!</a>
                    </Col>
                    
                </Row>
                <br />
                <a href="/recover">Esqueci minha senha</a>
                <br />
                <Button className="btn-enviar" type="submit"> Logar</Button>
            </div>


        </Container>
        </Form>
    )
}
