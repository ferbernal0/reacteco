import Card from 'react-bootstrap/Card';
import ItemCount from './CountContainer';

const ItemDetail = ({jsonpack}) => {
  console.log (jsonpack);
  return (
    <>
      <div align="center">
        <Card border="light" bg="dark" style={{ width: '250px' }} className="mb-2">
          <Card.Header>
            <Card.Img variant="top" src={jsonpack.thumbnail}/>
          </Card.Header>
          <Card.Body>
            <Card.Title>{jsonpack.title}</Card.Title>
            <Card.Subtitle className="mb-2">Precio: ${jsonpack.price}</Card.Subtitle>
            <Card.Text>Cantidad: {jsonpack.available_quantity}<p></p></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <ItemCount product_name={jsonpack.title} stock={jsonpack.available_quantity} initial={1}/>
    </>
  )
}

export default ItemDetail;