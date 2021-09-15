import Card from 'react-bootstrap/Card';
import ItemCount from './CountContainer';
import {Link} from 'react-router-dom';

export const ItemDetail = ({jsonpack}) => {
  if (jsonpack) {
    return (
      <div id="centerman" align="center">
        <Card border="light" bg="dark" style={{ width: '270px' }} className="mb-2">
          <Card.Header>
            <Card.Img variant="top"  src={jsonpack.picture} />
          </Card.Header>
          <Card.Body>
            <Link to={`/item/${jsonpack.id}`}>
              <Card.Link href="#">{jsonpack.title}</Card.Link>
            </Link>
            <Card.Subtitle className="mb-2">Precio: ${jsonpack.price}</Card.Subtitle>
            <Card.Text className="mb-2">Cantidad: {jsonpack.stock}</Card.Text>
          </Card.Body>
        </Card>
        <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1} productid={jsonpack.id} />
      </div>
    )
  }
  else {
    return(<></>)
  }
}