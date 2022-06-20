import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
export default function Footer() {
    return (
        <footer>
        <Container className='footer-main'>
            <Row>
                <Col xs={5}>
                    <h6>© Copyright {new Date().getFullYear()}. Todos os direitos reservados. Johh (José Adauto)</h6>
                </Col>
                
                <Col >
                    <h6>Portfólio: https://albadev.netlify.app</h6>
                    <h6>Github: https://github.com/albadev</h6>

                </Col>
                <Col >
                    <h6>Linkedin: https://linkedin</h6>
                    <h6>Github: https://github.com/albadev</h6>

                </Col>
            </Row>
            
        </Container>

        </footer>
    )
}
