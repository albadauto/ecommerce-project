import React from 'react'
import "./style.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
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
            <br /><br />
            <Row className='photo-main-container'>
                <Col className="text-center">
                    <Image src={api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `/${selectedAnnounce.photo}`} className="img-announce"/>
                </Col>

                <Col className=''>
                   <h4> {selectedAnnounce.name}</h4><br />
                   <h2 style={{color: "blueviolet"}}>R$ {selectedAnnounce.price}</h2><br />
                   <h4>Descrição:</h4><br/>
                   <h5>{selectedAnnounce.description}</h5>
                </Col>
                
                <Col className="contact-container text-center">
                    <h3>Dados do vendedor</h3><br />
                    <h4>Nome: {selectedAnnounce.name_user}</h4>
                    <h4>Telefone: {selectedAnnounce.phone}</h4>
                    <h4>Cidade: {selectedAnnounce.city}</h4>
                    <h4>Bairro: {selectedAnnounce.district}</h4>

                </Col>

            </Row>
            
            <Row>
                
            </Row>
        </Container>
    )
}
