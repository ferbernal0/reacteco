import ItemCount from './CountContainer';

const ItemListContainer = ({name}) => {
   return (
       <div name="test">
         <div class="p-3 mb-2">
         {name}
            <ItemCount product_name='Panes MM' stock={5} initial={1}/>
            <ItemCount product_name='Panes Blancos' stock={9} initial={1}/>
         </div>
      </div>
   )
}

export default ItemListContainer;