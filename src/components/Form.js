import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { Text, Button } from "@nextui-org/react";

const Contacto = () => {
  return (
    <>
      <div class="form-header">
        <Text color="success" h2>
          Dejanos tu consulta y te contactaremos
        </Text>
      </div>
      <div className="container">
        <FloatingLabel
          controlId="floatingInput"
          label="Correo Electrónico"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comentario">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="container" style={{ margin: 9 }}>
          <div class="btnSend">
            <Button shadow color="success" auto>
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
