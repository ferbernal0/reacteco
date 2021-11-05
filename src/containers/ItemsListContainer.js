import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Text } from "@nextui-org/react";
import { getFirestore } from "../firebase";

const ItemsListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      const dbKey = getFirestore();
      dbKey
        .collection("items")
        .where("categoria", "==", idCategoria)
        .get()
        .then((resp) => {
          setProductos(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          );
        })
        .catch((err) => console.log(err));
    } else {
      const dbKey = getFirestore();
      dbKey
        .collection("items")
        .get()
        .then((resp) => {
          setProductos(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          );
        })
        .catch((err) => console.log(err));
    }
  }, [idCategoria]);

  return (
    <div>
      <div className="form-header">
        <Text color="primary" h1>
          {"Bienvenidos a FB-Tecno"}
        </Text>
      </div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemsListContainer;
