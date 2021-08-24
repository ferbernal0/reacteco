import Nav from 'react-bootstrap/Nav'
import cart from './cart.png'

const Carrito = () => {
    return (
        <Nav.Link>
            <a class="navbar-brand" href="#carrito">
                <img src={cart} alt="logo" width="40"></img>
            </a>
        </Nav.Link>
    )
}

export default Carrito;