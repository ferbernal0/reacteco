import React from "react";
import { memo } from "react";
import Item from "./Item";

const ItemList = memo(({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </>
  );
});

export default ItemList;
