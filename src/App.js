import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './components/Cart/CartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App () {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer name="Escoger producto a comprar"/>
          </Route>
          <Route path="/categories/:categoryid">
              <ItemListContainer/>
          </Route>
          <Route path="/categories">
              <ItemListContainer/>
          </Route>
          <Route path="/item/:itemid">
              <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App