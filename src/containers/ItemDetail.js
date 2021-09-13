import Card from 'react-bootstrap/Card';
import ItemCount from './CountContainer';
import {Link} from 'react-router-dom';

export const ItemDetail = ({jsonpack}) => {
  console.log ("Detalle de ItemDetail:",jsonpack)

  function Terminar () {
    window.location.href="/cart"}

  if (jsonpack) {
    return (
      <>
        <Card border="light" bg="dark" style={{ width: '270px' }} className="mb-2">
          <Card.Header>
            <Card.Img variant="top" src={jsonpack.picture}/>
          </Card.Header>
          <Card.Body>
            <Link to={`/item/${jsonpack.id}`}>
              <Card.Link href="#">{jsonpack.title}</Card.Link>
            </Link>
            <Card.Subtitle className="mb-2">Precio: ${jsonpack.price}</Card.Subtitle>
            <Card.Text className="mb-2">Cantidad: {jsonpack.stock}<p></p></Card.Text>
          </Card.Body>
        </Card>
        <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1} />
          <button id="but1" style={{display:'none'}} onClick={Terminar}>Terminar mi compra</button>
      </>
    )
  }
  
  else {
    return (<></>)
  }

}

export default ItemDetail;