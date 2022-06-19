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
            setSelectedAnnounce(res.data.result)
        })
    }, [])
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <Image src={api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `/${selectedAnnounce.photo}`} />
                    asdfasfdasdfa
                </Col>
            </Row>
            

        </Container>
    )
}
