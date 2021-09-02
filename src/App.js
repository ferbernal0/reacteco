import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer name="PANES A LA VENTA"/>
    </div>
  )
}

export default App;