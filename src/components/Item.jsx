import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={producto.foto} />
              <Card.Body>
                <Text color="primary" h6>
                  {producto.name}
                </Text>
                <Text color="secondary" h5>
                  {" "}
                  $ {producto.precio}
                </Text>
                <Link to={`/detalle/${producto.id}`}>
                  <Button shadow color="success" auto>
                    Detalle
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Item;
