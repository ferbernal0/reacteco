import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Carrito} from '../Cart/CartWidget';

const NavBar = () => {
    return (
        <Navbar style={{ background: 'black' }} expand="lg" variant="dark">
            <Navbar.Brand href="#index.html" style={{ color: 'darkcyan', fontSize: '1.75rem' }}>
                <Link to={`/`}></Link>
                MASA PADRE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes de MM</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes Integrales</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes Blancos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Carrito/>
        </Navbar>
    )
}

export default NavBar