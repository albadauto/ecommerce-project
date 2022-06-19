import React from 'react'
import "./style.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { api } from '../../api';
export default function SingleAnnounce() {
    const navigate = useNavigate();
    const [selectedAnnounce, setSelectedAnnounce] = useState({});
    const { id } = useParams();
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/Login");
        }

        api.get(`/announce/${id}`, {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        }).then((res) => {
            const resultado = res.data.result.map((val) => val)

            setSelectedAnnounce(resultado[0]);
        })
    }, [])
    return (
        <Container>
            <br />
            <h5>Anúncios {"> " + selectedAnnounce.type}</h5>
            <br /><br />
            <Row className='photo-main-container'>
                <Col className="text-center">
                    <Image src={api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `/${selectedAnnounce.photo}`} className="img-announce" />
                </Col>

                <Col className=''>
                    <h4> {selectedAnnounce.name}</h4><br />
                    <h2 style={{ color: "blueviolet" }}>R$ {selectedAnnounce.price}</h2><br />
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Descrição</Card.Title>
                            <Card.Text>
                                {selectedAnnounce.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="contact-container ">
                    <div className='text-center'>
                        <h3>Dados do vendedor</h3><br />
                    </div>
                    <h4>Nome: {selectedAnnounce.name_user}</h4>
                    <h4>Telefone: {selectedAnnounce.phone}</h4>
                    <h4>Cidade: {selectedAnnounce.city}</h4>
                    <h4>Bairro: {selectedAnnounce.district}</h4>
                    <br />
                    <div className='text-center'>
                        <Button variant="secondary botao-whatsapp" href={`https://api.whatsapp.com/send?phone=${selectedAnnounce.phone}`} target="_blank">Contatar Via Whatsapp</Button>
                    </div>

                </Col>

            </Row>

            <Row>

            </Row>
        </Container>
    )
}
