import {createContext} from 'react';

export const CartContext = createContext ({})
export const CartProvider = ({children}) => {
    let cart = []
    const  additem = ({itemid}, {count}) => {
        if (!cart) {
            cart.push ({itemid,count})
        }
        else {
            if (isInCart ({itemid})) {
                cart[isInCartIndex({itemid})].count = cart[isInCartIndex({itemid})].count + count
                cart=cart
                }
            else {
                cart.push ({itemid, count})
                cart=cart
                }
        }
        console.log ("Contenido de cart en context mas abajo")
        console.log (cart)
        console.log ("Largo de cart:"+cart.length)
    }

    const removeItem = ({itemid}) => {
        let cart2=[]
        let i=0
        while (i<cart.length) {
            if (cart[i].itemid!==itemid) {
                cart2.push (cart[i])
            }
            i=i+1;
        }
        cart=cart2
    }

    const clear = () => {
        cart = []
    }

    const isInCart = ({itemid}) => {
        let i=0
        if (cart.length) {
            while (i<cart.length) {
                if (cart[i].itemid===itemid)
                return true
                i++
            }
            return false
        }
        else {
            return false
        }
    }

    const isInCartIndex = ({itemid}) => {
        let i=0
        if (cart.length) {
            while (i<cart.length) {
                if (cart[i].itemid===itemid)
                return i
                i++
            }
            return false
        }
        else {
            return false
        }
    }

    return (
        <CartContext.Provider value = {{cart,additem,removeItem,clear,isInCart,isInCartIndex}}>
            {children}
        </CartContext.Provider>
    )
}