import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { toast } from "react-toastify";
import { api } from '../../api';
import "./style.css";
export default function Register() {
    const [passVerify, setPassVerify] = useState("");
    const [contrato, setContrato] = useState(false);
    const [userData, setUserData] = useState({
        name_user: "",
        email: "",
        password: "",
        address: "",
        complement: "",
        district: "",
        uf: "",
        cpf: "",
        city: "",
        phone: "",
        number: ""
    })

    function handleOnSubmit(e) {
        e.preventDefault();
        if (passVerify === userData.password && contrato) {
            api.post("/user/insertNewUser", userData).then((result) => {
                toast.success("Usuário cadastrado com sucesso!");
            }).catch((err) => console.log(err));

        } else {
            return toast.error("Erro, as senhas não batem!");
        }

    }
    return (
        <Container className="border border-dark container-main-register">
            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col className='title1 text-center'>
                        Registre-se e participe da nossa comunidade!
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={4}>
                        <Form.Control placeholder="Nome" value={userData.name_user} onChange={(e) => setUserData({ ...userData, name_user: e.target.value })} />
                    </Col>
                    <Col xs={4}>
                        <Form.Control placeholder="Telefone" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                    </Col>
                    <Col xs={4}>
                        <Form.Control placeholder="Email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={6}>
                        <Form.Control placeholder="Senha" type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    </Col>
                    <Col xs={6}>
                        <Form.Control placeholder="Repita a senha" type="password" value={passVerify} onChange={(e) => setPassVerify(e.target.value)} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={3}>
                        <Form.Control placeholder="Endereço" value={userData.addresss} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
                    </Col>
                    <Col xs={3}>
                        <Form.Control placeholder="Cidade" value={userData.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} />

                    </Col>

                    <Col xs={3}>
                        <Form.Control placeholder="Bairro" value={userData.district} onChange={(e) => setUserData({ ...userData, district: e.target.value })} />
                    </Col>
                    <Col xs={3}>
                        <Form.Control placeholder="Numero" value={userData.number} onChange={(e) => setUserData({ ...userData, number: e.target.value })} />

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={4}>
                        <Form.Select value={userData.uf} onChange={(e) => setUserData({ ...userData, uf: e.target.value })}>
                            <option>Selecione o Estado</option>

                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>

                        </Form.Select>
                    </Col>
                    <Col xs={4}>
                        <Form.Control placeholder="Complemento" value={userData.complement} onChange={(e) => setUserData({ ...userData, complement: e.target.value })} />

                    </Col>
                    <Col xs={4}>

                        <Form.Control placeholder="CPF" value={userData.cpf} onChange={(e) => setUserData({ ...userData, cpf: e.target.value })} />

                    </Col>

                </Row>
                <br />
                <Row>
                    <Col>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Eu aceito os termos de contrato da PLX"
                            onChange={() => setContrato(!contrato)}
                        />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className='text-center'>
                        <Button className="btn-enviar" type="submit">Registrar</Button>
                    </Col>
                </Row>
                <br />
            </Form>
            <Row>
                <Col className="text-center">
                    Já tem conta no site? <a href="/login">Entrar</a>
                </Col>
            </Row>
            <br />


        </Container>
    )
}
