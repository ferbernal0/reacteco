import ItemList from './ItemList';
import jsonpack from './data.json';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

const ItemListContainer = ({name}) => {
    const {categoryid} = useParams ()
    const {cat} = useState (categoryid)
    const [item, setItems] = useState ([])
    const call = new Promise ((resolve) => {
        setTimeout (() => {resolve (jsonpack)}, 2000)})
        call.then (response => {setItems (response)})
        console.log (cat)
    return (
        <div name="test">
            <div class="p-3 mb-2 bg-dark text-white">
                {name}
                <ItemList items={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer