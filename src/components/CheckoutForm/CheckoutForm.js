import React, { useState } from "react";
import "./CheckoutForm";

import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useCartContext } from "../../context/CartContext";

// const db = getFirestore(initializeApp());

function CheckoutForm() {
const {cart, totalPrice} = useCartContext()

  const valorInicial = {
    buyer: {
      nombre: "",
      telefono: "",
      email: ""
    },
    items: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity})),
    total: totalPrice(),
  }



const [user, setUser] = useState(valorInicial)

const capturarInputs = (e) =>{
  const {name, value} = e.target;
  setUser({...user, [name]:value})
}

const guardarDatos = (e) => {
  e.preventDefault();
  // console.log(user);
  try {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection,{...user})
    // await addDoc(collection( db, "orders"),{...user})
    // console.log(user);
  } catch (error) {
    console.log(error);
  }
 setUser({...valorInicial})
 console.log(valorInicial);

}


  return (
    <form onSubmit={guardarDatos} >
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
      <button>GUARDAR</button>
    </form>
  );
}


export default CheckoutForm  ;



  // const [dataForm, setDataForm] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  // });

  // function handleInputChange(event) {
  //   let inputName = event.target.name;
  //   let value = event.target.value;

  //   const newDataForm = { ...dataForm };
  //   newDataForm[inputName] = value;
  //   setDataForm(newDataForm);
  //   console.log(dataForm);
  // }