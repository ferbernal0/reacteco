import Card from 'react-bootstrap/Card';
import ItemCount from './CountContainer';

const Item = ({jsonpack}) => {
  return (
      <Card border="light" bg="dark" style={{ width: '350px' }} className="mb-2">
        <Card.Header>
          <Card.Img variant="top" src={jsonpack.picture}/>
        </Card.Header>
        <Card.Body>
          <Card.Title>{jsonpack.title}</Card.Title>
          <Card.Subtitle className="mb-2">Precio: ${jsonpack.price}</Card.Subtitle>
          <Card.Text>{jsonpack.description}</Card.Text>
          <ItemCount stock={jsonpack.stock} initial={1}/>
        </Card.Body>
      </Card>
  )
}

export default Item;