import React, { useState } from 'react'
import { Col, Container, Row, Form, FormSelect, Button } from 'react-bootstrap'
import "./style.css";
import { BsTelephonePlusFill } from "react-icons/bs";
export default function Announces() {
  const [term, setTerm] = useState(true);
  function handleAddTerm(){
    setTerm(!term);
  }
  return (
    <div>
      <Container className='border border-dark ann-main'>
        <Row>
          <Col>
            <Form.Control placeholder='Titulo' />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control as="textarea" rows={3} placeholder="Descrição do projeto" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Select>
              <option>Selecione o tipo de anuncio</option>
            </Form.Select >
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <h6>Adicione uma foto</h6>
            <Form.Control type="file" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>Contato</h6>
            <b><h6><BsTelephonePlusFill color='blueviolet' />  (11) 93286 3267</h6></b>
          </Col>
        </Row>
        <br />
        
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Eu aceito os termos de contrato da PLX"
          onChange={() => handleAddTerm()}
        />
        <Row>
          <Col className='text-center'>
            <Button className='btn-enviar' variant='secondary'>Enviar</Button>
          </Col>
        </Row>


      </Container>

    </div>
  )
}
