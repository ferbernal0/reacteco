import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import productos from './data.json';

const ItemDetailContainer = ({items}) => {
    const [producto,setProducto] = useState([])
    const {itemid} = useParams ()
        useEffect(()=>{
            if (items)
                {console.log("Good news item is defined")}
            else {
                items = productos
                console.log("badnews")}
    const call=new Promise ((resolve)=>{
        setTimeout (() => {resolve(items)},2000)})
        call.then (response => {
            console.log(itemid);
            console.log(response[itemid-1]);
            setProducto(response[itemid-1]);})})

    return (
        <div class="p-3 mb-2 bg-dark text-white" align="center">
            <ItemDetail jsonpack={producto}/>
        </div>
    )
}

export default ItemDetailContainer;