import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Carrito from '../Cart/CartWidget';

function NavBar() {
    return (
        <Navbar style={{ background: 'black' }} expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#" style={{ color: 'darkcyan', fontSize: '1.75rem' }}>MASA PADRE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes de MM</Nav.Link>
                        <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes Integrales</Nav.Link>
                        <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes Blancos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Form outline>
                <FormControl type="text" placeholder="Busqueda" className="mr-sm-2"/>
            </Form>
            <Carrito/>
        </Navbar>
    )
}

export default NavBar