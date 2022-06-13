import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, FloatingLabel } from 'react-bootstrap'
import { api } from '../../api';
import "./style.css";
import { toast } from "react-toastify";

export default function Recover() {
  const [data, setData] = useState({
    email: ""
  })
  const [verifyCodeData, setVerifyCodeData] = useState({
    code: "",
    password: ""
  });
  const [visible, setVisible] = useState({
    form1: "block",
    form2: "none"
  });
  const [idUsr, setIdUsr] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    api.post("/user/findByEmail", data).then((res) => {
      setIdUsr(res.data.result.id)
      api.post(`/user/recover/${idUsr}`, data).then((response) => {
        toast.success(response.data.message);
        setVisible({...visible, form2: "block", form1: "none"});

      })
    }).catch(() => toast.error("Email inexistente"));
  }

  function handleVerifyCode(e){
    e.preventDefault();
    if(verifyCodeData.code === "" || verifyCodeData.password === ""){
      toast.error("Digite algo válido!");
    }
    api.post("/user/recoverPass", {...verifyCodeData, id: idUsr}).then((res) => {
      if(res.data.recovered){
        toast.success("Senha atualizada com sucesso!");
      }else{
        toast.error("Código não válido, tente novamente")
      }
    }).then((err) => console.log(err));
  }

  return (
    <Container className="text-center border border-dark container-recover">
      <Form onSubmit={handleOnSubmit} style={{display: visible.form1}}>
        <h4 className='title1'>Digite o email da sua conta, enviaremos um código para recuperar sua senha :)</h4>
        <Row>
          <Col>
            <FloatingLabel label="Email">
              <Form.Control placeholder='ex: zezinho@email.com' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </FloatingLabel>

          </Col>
        </Row>
        <br />
        <Button className="btn-enviar" type="submit">Enviar</Button>
      </Form>
      <br />
      <Form onSubmit={handleVerifyCode} style={{display: visible.form2 }}>
        <h4 className='title1'>Foi enviado um código no seu email, insira-o e cadastre uma nova senha</h4>
        <FloatingLabel label="Código">
          <Form.Control type="text" placeholder='Código enviado no email' value={verifyCodeData.code} onChange={(e) => setVerifyCodeData({...verifyCodeData, code: e.target.value})}/>
        </FloatingLabel>
        <br />
        <FloatingLabel label="Nova senha">
          <Form.Control type="text" placeholder='Nova senha' value={verifyCodeData.password} onChange={(e) => setVerifyCodeData({...verifyCodeData, password: e.target.value})}/>
        </FloatingLabel>
        <Form.Control type="hidden" value={idUsr} />
        <br />
        <Button className="btn-enviar" type="submit">Verificar</Button>

      </Form>

    </Container>
  )
}
