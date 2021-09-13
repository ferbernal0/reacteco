import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App () {
  return (
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
  )
}

export default App