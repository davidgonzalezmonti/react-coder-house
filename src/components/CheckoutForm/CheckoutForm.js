import React, { useState } from "react";
import "./CheckoutForm";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

function CheckoutForm() {
  const { cart, totalPrice, clearCartFin } = useCartContext();

  const valorInicial = {
    nombre: "",
    telefono: "",
    email: "",
    items: cart.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const [user, setUser] = useState(valorInicial);

  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guardarDatos = (e) => {
    e.preventDefault();
    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, { ...user });
    } catch (error) {
      console.log(error);
    }
    Swal.fire({
      position: "top-center",
      icon: "success",
      title:
        "Has finalizado tu compra, nos pondremos en contacto para programas la entrega",
      showConfirmButton: false,
      timer: 2000,
    });
    setUser({ ...valorInicial });
    clearCartFin();
  };

  return (
    <form className="form-checkout" onSubmit={guardarDatos}>
      <div className="checkout-container">
        <input
          onChange={capturarInputs}
          name="nombre"
          type="nombre"
          value={user.nombre}
          placeholder="Nombre"
        />
        <input
          onChange={capturarInputs}
          name="telefono"
          type="telefono"
          value={user.telefono}
          placeholder="Telefono"
        />
        <input
          onChange={capturarInputs}
          name="email"
          type="email"
          value={user.email}
          placeholder="Email"
        />
      </div>
      <button className="finalizar-cart">Finalizar compra</button>
    </form>
  );
}

export default CheckoutForm;
