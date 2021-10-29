import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

  const Item = ({jsonpack}) => {
    const itemid = jsonpack.id

    return (
      <>
        <Card border="light" bg="dark" style={{ width: '25rem' }} className="mb-2">
          <Card.Header>
            <Card.Img variant="top" src={jsonpack.picture}/>
          </Card.Header>
          <Card.Body>
            <Link to={`/item/${itemid}`}><Card.Link>{jsonpack.title}</Card.Link></Link>
            <Card.Subtitle className="mb-2">Precio: ${jsonpack.price}</Card.Subtitle>
            <Card.Text>Descripción: {jsonpack.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }

export default Item