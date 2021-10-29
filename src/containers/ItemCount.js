import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import {useState, useContext} from 'react';
import {CartContext} from '../components/Cart/CartContext';
import {useParams} from "react-router-dom";

const ItemCount = ({product_name, initial, itemprice, min, max}) => {
  const [count] = useState(initial)
  const {itemid} = useParams()
  const {additem, carts, cartlength} = useContext(CartContext)
  console.log ("ver contenido de carts",carts.map(cart=>cart.productname))
  console.log ("New cartlength function",cartlength())
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Table striped bordered hover variant="dark" size="sm" align="center" >
          <thead style={{ width: '18rem' }}>
            <tr>
              <th style={{ width: '18rem' }}>{product_name}</th>
            </tr>
          </thead>
          <tbody style={{ width: '18rem' }}>
            <tr>
              <td><Button variant="secondary"  onClick={min}>-</Button></td>
              <td align="center">{count}</td>
              <td><Button variant="secondary" onClick={max}>+</Button></td>
            </tr>
            <tr>
              <td align="center">
              <button disabled={count===0} id="but2" onClick={()=>additem({product_name},{itemid},{count},{itemprice})}>Agregar a carrito</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </ButtonGroup>
    </>
  )
}

export default ItemCount