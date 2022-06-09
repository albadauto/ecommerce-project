import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <h6>© Copyright {new Date().getFullYear()}. Todos os direitos reservados. Johh</h6>
                </Col>
                <Col>
                <h6>Testing</h6>
                
                </Col>
            </Row>
        </Container>
    )
}
