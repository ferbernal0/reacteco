import Button from 'react-bootstrap/Button'
import {useContext} from 'react'
import {CartContext} from './CartContext'

export const DelButton = ({itemid}) => {
    const {removeitem} = useContext (CartContext)
    console.log("Estoy en DelButton con itemid:" + itemid)
    return (
        <Button variant='outline-secondary' onClick={()=>removeitem({itemid})}>Eliminar Item</Button>
    )
}

export default DelButton