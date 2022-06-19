import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { api } from '../../api';
import "./style.css";
export default function AllAnnounces() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allAnnouncesForCategory, setAllAnnouncesForCategory] = useState([]);

  useEffect(() => {
    api.get("/findAllAnnounces").then((res) => {
      setAllAnnouncesForCategory(res.data.result);
    })
      .catch((err) => console.log("Error: " + err));
  }, [])

  
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Form.Select aria-label="Default select example" onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas as categorias</option>
            <option value="imoveis">Imóveis</option>
            <option value="tecnologia">Técnologia</option>
            <option value="esporte">Esporte</option>
            <option value="serviços">Serviços</option>
            <option value="modaebeleza">Moda e beleza</option>
            <option value="musicaehobbies">Música e hobbies</option>
          </Form.Select>
        </Col>
      </Row>
      <br />
      <Row>

        {allAnnouncesForCategory
        .filter((valor) => selectedCategory === valor.type || selectedCategory === "")
        .map((val) => {
          return (
            <Col xs={3}>
             
              <Card style={{ width: '18rem' }} className="main-card" >
                <Card.Img variant="top" src={api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `/${val.photo}`} className="img-card-announce" />
                <Card.Body>
                  <Card.Text>{val.name}</Card.Text>
                  <Card.Title>
                    R$ {val.price}
                  </Card.Title>
                  <div className="button-conferir text-center">
                    <Button variant="secondary" className='btn-enviar' href={`/singleannounce/${val.id}`}>Conferir</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          )
          
        })}
      </Row>

    </Container>
  )
}
