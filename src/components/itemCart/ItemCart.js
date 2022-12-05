import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <section className="main-carrito">
      <div className="conteiner-card-carrito">
        <div key={product.id} className="card-productos-carrito">
          <div className="card-img-conteiner-carrito">
            <img
              src={product.imagen}
              alt="imageStickers"
              className="card-img-carrito"
            />
          </div>
          <div className="description-carrito">
            <h2>{product.nombre}</h2>
            <ul>
              <li> Precio unidad: ${product.precio}</li>
              <li>Cantidad: {product.quantity}</li>
              <li> Tamaño: {product.tamaño}</li>
              <li>Subtotal: ${product.quantity * product.precio}</li>
            </ul>
            <div className="button-carrito">
              <button onClick={() => removeProduct(product.id)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCart;
