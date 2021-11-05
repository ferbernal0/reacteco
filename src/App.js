import { createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./components/Form";
import ItemsListContainer from "./containers/ItemsListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Cart/CartContext";

export const ContextApp = createContext("");

function App() {

  return (
    <CartContextProvider>
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
    </CartContextProvider>
  );
}

export default App;
