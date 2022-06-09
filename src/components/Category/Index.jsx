import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import "./style.css";

export default function Category({ icon, name }) {
    return (
        <Container>

            <div className='category-main'>
                <button className='circle-category'>
                    {icon}
                </button>
                <Row>
                    <Col>
                        <p className='name-category'>{name}</p>
                    </Col>
                </Row>


            </div>
        </Container>


    )
}
