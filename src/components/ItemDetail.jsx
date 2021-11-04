import { Card, Col, Container, Row } from "react-bootstrap";

import ItemCount from "./ItemCount";
import React from "react";
import { Text } from "@nextui-org/react";

const ItemDetail = ({ item }) => {
  console.log("item en itemdetail", item);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={""} />
              <Card.Body>
                <Text color="primary" h6>
                  {""}
                </Text>
                <Text color="secondary" h4>
                  {item?.name}
                </Text>
                <Text color="secondary" h5>
                  {" "}
                  ${item?.precio}{" "}
                </Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        ​
        <Col>
          <ItemCount stock={5} initial={1} item={item} />
        </Col>
      </Container>
    </div>
  );
};
export default ItemDetail;
