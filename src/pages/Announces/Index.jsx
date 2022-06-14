import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, FormSelect, Button, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import uuid from "react-uuid";
import "./style.css";
import { BsTelephonePlusFill } from "react-icons/bs";
import { api } from '../../api';
export default function Announces() {
  const navigate = useNavigate();
  const [term, setTerm] = useState(true);
  const [userTel, setUserTel] = useState([]);
  function handleAddTerm() {
    setTerm(!term);
  }
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }

    async function handleOnStart() {
      try {
        const tel = await api.get(`/user/findById/${sessionStorage.getItem("id")}`);
        setUserTel([tel.data.result.phone]);
      } catch (err) {
        console.log(err)
      }
    }
    handleOnStart();

  }, [])
  return (
    <div>
      <Container className='border border-dark ann-main'>
        <Row>
          <Col>
            <FloatingLabel label='Título'>

              <Form.Control placeholder='Titulo' />
            </FloatingLabel>

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
              <option value="imoveis">Imóveis</option>
              <option value="tecnologia">Técnologia</option>
              <option value="esporte">Esporte</option>
              <option value="serviços">Serviços</option>
              <option value="modaebeleza">Moda e beleza</option>
              <option value="musicaehobbies">Música e hobbies</option>

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
          <h6>Contato</h6>
          {userTel.map((val) => {
            return (
              <Col>

                <b><h6 key={uuid()}><BsTelephonePlusFill color='blueviolet' /> {val}</h6></b>
              </Col>

            )
          })}
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
