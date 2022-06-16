import React from 'react'
import { Col, Container, Form, Image, Row, Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import Category from '../../components/Category/Index';
import { IoIosHome } from "react-icons/io";
import { MdComputer, MdSportsSoccer, MdDesignServices } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { FaGuitar } from "react-icons/fa";
import './style.css';
export default function Home() {
  return (
    <>
      <div className='main'>
        <Container>
          <Row>
            <Col className='text-center'>
              <Form.Control type="email" className="search-st" placeholder="Digite um produto que você procura" />
            </Col>
          </Row>
        </Container>
        <br />
        <Container>

          <Row>
            <Col>
              <Category icon={<IoIosHome />} name={"Imóveis"} />
            </Col>
            <Col>
              <Category icon={<MdComputer />} name={"Técnologia"} />
            </Col>
            <Col>
              <Category icon={<MdSportsSoccer />} name={"Esporte"} />
            </Col>
            <Col>
              <Category icon={<MdDesignServices />} name={"Serviços"} />
            </Col>
            <Col>
              <Category icon={<GiClothes />} name={"Moda e beleza"} />
            </Col>
            <Col>
              <Category icon={<FaGuitar />} name={"Música e hobbies"} />
            </Col>
          </Row>
        </Container>


        <Container className='ultimos-anuncios'>
          <Row>
            <Col>
              <h5>Últimos Anúncios</h5>
            </Col>
          </Row>
          <Row>
            <Col className='box-announce'>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://localhost:3333/uploads/37a264e-e4-e855-4fb4-630a1c2c6d7.png" />
                <Card.Body>
                  <Card.Title>Geladeira pica</Card.Title>
                  <Card.Text>
                    Descrição do produto
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Nome do vendedor</ListGroupItem>
                  <ListGroupItem>Tipo de produto</ListGroupItem>
                </ListGroup>
               
              </Card>


            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col className="text-center mt-3 mb-3">
            <h2>Descubra</h2>
          </Col>
        </Row>

        <Row>
          <Image src='https://i.pinimg.com/736x/ce/1b/ce/ce1bceba1d766fd87fe4ac28c5c985ea.jpg' responsive className='descubra-img' />
        </Row>
        <br />
        <Row>
          <Image src='https://i0.wp.com/linkedinpro.co/wp-content/uploads/2018/08/background-image-6_table-desk.jpg?resize=1040%2C262&ssl=1' responsive className='descubra-img' />
        </Row>

        <br />

        <Row>
          <Image src='https://www.injecaodeplasticos.com.br/wp-content/uploads/2018/06/Como-anda-o-setor-de-eletrodom%C3%A9sticos-para-a-ind%C3%BAstria-do-pl%C3%A1stico.jpg' responsive className='descubra-img' />
        </Row>
        <br />
        <Row>
          <Image src=' https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-750x375.jpg' responsive className='descubra-img' />
        </Row>

      </Container>

      <Container>
        <Row>
          <Col className="text-center mt-5">
            <h2>Sobre nós</h2>
          </Col>
        </Row>

      </Container>

    </>
  )
}
