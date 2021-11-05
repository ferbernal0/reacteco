import { createContext, useContext, useState } from "react";
export const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (itemnvo, count) => {
    console.log("itemnvo", itemnvo);
    console.log("cantidad", count);
    let previousCart = [...cartList];

    if (previousCart.some((i) => i.item.id === itemnvo.item.id)) {
      previousCart.find((i) => i.item.id === itemnvo.item.id).count +=
        itemnvo.count;
      setCartList(previousCart);
    } else {
      setCartList([...cartList, { itemnvo, count }]);
      console.log(cartList);
    }
  };
  const deleteFromCart = (item) => {
    const deleteProduct = cartList.filter(
      (item = item.item.id !== item.item.id)
    );
    setCartList([...deleteProduct]);
  };
  const iconCart = () => {
    return cartList.reduce((acum, valor) => acum + valor.count, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (acum, valor) => acum + valor.count * valor.item.precio,
      0
    );
  };

  function clearList() {
    cartList([]);
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        clearList,
        iconCart,
        deleteFromCart,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const cartItem = (item) => {
  return {
    item,
    count: 1,
  };
};
