import React, {useState, useContext} from 'react'
import Swal from "sweetalert2";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
const [cart, setCart] = useState([]);

console.log("carrito: " , cart);

const addProduct = (item, quantity) =>{
if (isInCart(item.id)) {
    setCart(cart.map(product => {
        return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
    }));
} else {
    setCart([...cart, {...item, quantity}])
}
}


const totalPrice = () => {
    return cart.reduce((prev,act) => prev +act.quantity * act.precio, 0)
}

const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);


const clearCart = () => {
    Swal.fire({
        title: 'Desea vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar el carrito!'
      }).then((result) => {  
        if (result.isConfirmed) {
          Swal.fire(
            'Carrito vacio',
            'Has vaciado el carrito',
            'success'
          )
          setCart([]);
        }
      })
};

const isInCart = (id) => cart.find(product => product.id === id) ? true : false


const removeProduct = (id) => setCart(cart.filter(product => product.id !== id ));


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
