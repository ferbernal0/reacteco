import ItemDetail from './ItemDetail';
import {useState} from 'react';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState ()
        fetch ("https://api.mercadolibre.com/sites/MLA/search?q=pan_masa_madre&limit=1")
        .then (response => response.json())
        .then (data => setProductos (data.results));

    return (
        <div class="p-3 mb-2 bg-dark text-white">
            {productos.map (item => <ItemDetail key={item.id} jsonpack={item}/>)}
        </div>
    )
}

export default ItemDetailContainer;