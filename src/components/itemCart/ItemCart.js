import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';

const ItemCart = ({product}) => {
  
   const { removeProduct } = useCartContext();

return (

<div className='carrito'>
    <img src="" alt="" srcset="" />
    <div>
        <p>Titulo: {product.nombre}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.precio}</p>
        <p>Subtotal: ${product.quantity * product.precio}</p>
        <button onClick={() => removeProduct(product.id)} >Eliminar</button>
    </div>
</div>

)

}

export default ItemCart;