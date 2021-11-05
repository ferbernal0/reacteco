import { createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./components/Form";
import ItemsListContainer from "./components/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext.js";

export const ContextApp = createContext("");

function App() {
  // function setearStatte(item) {
  //   setState(item);
  // }

  return (
    <CartContextProvider>
      {/* <CreateContext.Provider value={{ state, setearStatte }}> */}
      <BrowserRouter>
        <>
          <NavBar />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/detalle/:id" component={ItemDetailContainer} />
            <Route path="/contacto" component={Contacto} />

            <Route path="/">
              <ItemsListContainer />
            </Route>

            <Route exact path="/categoria/:idCategoria"></Route>

            <Route exact path="/item/:id">
              <ItemsListContainer />
            </Route>
          </Switch>
        </>
      </BrowserRouter>
      {/* </CreateContext.Provider> */}
    </CartContextProvider>
  );
}

export default App;
