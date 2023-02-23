import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cart, dispatch, quantityById } = useContext(CartContext);

  // console.log({ cart });
  // console.log("cantidad por id", quantityById)

  return (
    <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          dispatch({
            type: "ADD_CART",
            payload: { name: "Notebook", price: 220, id: 3, quantity: 13 },
          })
        }
      >
        Agregar
      </Button>
      <Button
      variant="contained"
      color="primary"
        onClick={() =>
          dispatch({
            type: "REMOVE_ONE",
            payload: { id: 3 },
          })
        }
      >
        Eliminar un elemento
      </Button>

      <Button
      variant="contained"
      color="primary"
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        Limpiar Carrito
      </Button>

      <Button
      variant="contained"
      color="primary"
        onClick={() =>
          dispatch({
            type: "GET_QUANTITY",
            payload: { id: 3 },
          })
        }
      >
        Obtener cantidad por id
      </Button>
    </div>
  );
};

export default Cart;
