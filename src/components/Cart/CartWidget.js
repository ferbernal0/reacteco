import Nav from 'react-bootstrap/Nav'
import cart from './cart.png'
import {CartContext} from './CartContext'
import {Link} from "react-router-dom"
import {useContext} from 'react'

export const Carrito = () => {
    const {cartlength} = useContext(CartContext)
    console.log ("Valor de total en widget")
    console.log ("Loading Cartwidget")
    return (
        <Nav.Link href='#'>Carrito: {cartlength}
            <Link to={'/cart'}>
                <img src={cart} alt="logo" width="40"></img>
            </Link>
        </Nav.Link>
    )
}