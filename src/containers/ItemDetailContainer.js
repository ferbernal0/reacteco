import ItemDetail from './ItemDetail';
import {useState} from 'react';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState ()
        fetch ("https://api.mercadolibre.com/sites/MLA/search?limit=1&q=pan%20masa%20madre")
        .then (response => response.json())
        .then (data => setProductos (data.results));

    return (
        <div class="p-3 mb-2 bg-dark text-white">
            {productos && productos.map (item => <ItemDetail key={item.id} jsonpack={item}/>)}
        </div>
    )
}

export default ItemDetailContainer;