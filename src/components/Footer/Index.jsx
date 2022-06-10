import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
export default function Footer() {
    return (
        <footer>

        <Container>
            <Row>
                <Col>
                    <h6>© Copyright {new Date().getFullYear()}. Todos os direitos reservados. Johh</h6>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>

        </footer>
    )
}
