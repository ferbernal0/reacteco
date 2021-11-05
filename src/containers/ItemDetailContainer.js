import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import React from "react";
import { getFirestore } from "../firebase";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const getProducto = (id) => {
    const dbKey = getFirestore();
    const itemCollection = dbKey.collection("items");
    const unItem = itemCollection.doc(id);
    return unItem.get();
  };
  useEffect(() => {
    getProducto(id).then((respuesta) => {
      if (respuesta.exists) {
        setItem({ id: respuesta.id, ...respuesta.data() });
      }
    });
    return;
  }, [id]);

  console.log("item en item detail container", item);
  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
