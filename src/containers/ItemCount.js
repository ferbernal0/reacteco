import { Button, Text } from "@nextui-org/react";
import { useContext, useState } from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

import cartContext from "./CartContext";

const ItemCount = ({ stock, initial, item }) => {
  const [count, setCount] = useState(initial);
  const [cambiarBoton, setCambiarBoton] = useState(true);

  const addToCart = useContext(cartContext);

  const addProduct = () => {
    setCount(count + 1);
  };

  const lessProduct = () => {
    setCount(count - 1);
  };
  const addItem = (item, count) => {
    console.log("item en addItem", item);
    console.log("count en addItem", count);
    setCount(count);
    setCambiarBoton(false);
    addToCart(item, count);
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <Text h3>{"Tu carrito"}</Text>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Text h2>Unidades: {count}</Text>
          </Card.Title>
          <Card.Text>
            <p>{count > stock ? "No hay stock" : ""}</p>
            <p>{count < 1 ? "La cantidad minima es 1" : ""}</p>
          </Card.Text>
          ​
          {cambiarBoton ? (
            <div>
              <Button shadow color="primary" auto onClick={addProduct}>
                <Text h4>+</Text>
              </Button>
              <Button shadow color="primary" auto onClick={lessProduct}>
                <Text h4>-</Text>
              </Button>
              ​
              <Button light color="success" auto onClick={() => addItem(count)}>
                <Text h5>{"Agregar al carrito"}</Text>
              </Button>
            </div>
          ) : (
            <div>
              <Link to={"/cart"}>
                <Button light color="success" auto>
                  Terminar Compra
                </Button>
              </Link>

              <Link to={"/"}>
                <Button light color="warning" auto>
                  Seguir comprando
                </Button>
              </Link>
            </div>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          Gracias por tu compra ! ! !
        </Card.Footer>
      </Card>
    </>
  );
};

export default ItemCount;
