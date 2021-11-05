import "firebase/firestore";
import React, { useState } from "react";
import { cartItem, useCartContext } from "./CartContext";
import { Card } from "react-bootstrap";
import Firestore from "../../firebase";
import { Text } from "@nextui-org/react";
import deleteFromCart from "./CartContext";
import firebase from "firebase";
import { getFirestore } from "../../firebase";

const Cart = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const { cartList, totalPrice } = useCartContext();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let orden = {};
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = formData;

    orden.total = totalPrice();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.count;

      return { id, title, price };
    });

    const db = getFirestore();
    const Orders = db.collection("orders").add(orden);
    Orders.then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() =>
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
        })
      );
  };
  <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
    <input
      type="text"
      placeholder="Nombre"
      name="nombre"
      value={formData.nombre}
    />
    <input
      type="text"
      placeholder="Telefono"
      name="telefono"
      value={formData.telefono}
    />
    <input
      type="text"
      placeholder="E-mail"
      name="email"
      value={formData.email}
    />
  </form>;
  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.nombre]: e.target.value,
    });
  }
  return (
    <div>
      <div>
        {cartList.map(({ itemnvo }) => (
          <div key={itemnvo.id}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={itemnvo.item.foto}
            />
            <label>Nombre:{itemnvo.item.name}</label>
            {""}
            <label>Edad:{itemnvo.item.price}</label>
            {""}
            <label>Cantidad:{itemnvo.count}</label>
            {""}
            <label>Total:{itemnvo.item.price * itemnvo.count}</label>
            {""}
            <button onClick={() => deleteFromCart(itemnvo.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
