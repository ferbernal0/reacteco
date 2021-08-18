import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    return (
        <Navbar style={{ background: 'black' }} expand="xxl" variant="dark">
            <Container>
                <Navbar.Brand href="#" style={{ color: 'white', fontSize: '1.5rem' }}>MASA PADRE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes de MM</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes Integrales</Nav.Link>
                    <Nav.Link href="#" style={{ color: 'white', fontSize: '1.25rem' }}>Panes Blancos</Nav.Link>
                    <NavDropdown title="Merchandasing" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Buzos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Gorras</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
