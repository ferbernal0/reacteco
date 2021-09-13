import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Table from 'react-bootstrap/Table'

const ItemCount = ({min, max, onAdd, count}) => {
  console.log(count);
  return (
    <ButtonGroup aria-label="Basic example">
      <Table striped bordered hover variant="dark" size="md">
        <tbody>
          <tr>
            <td><Button variant="secondary" onClick={min}>-</Button></td>
            <td>{count}</td>
            <td><Button variant="secondary" onClick={max}>+</Button></td>
          </tr>
          <tr>
            <td></td>
            <td><Button variant="secondary" disabled={count===0} onClick={onAdd}>Agregar al Carrito</Button></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </ButtonGroup>
  )
}

export default ItemCount;