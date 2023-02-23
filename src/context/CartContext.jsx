import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [
    { name: "Celular", price: 455, id: 1, quantity: 5 },
    { name: "Tablet", price: 111, id: 3, quantity: 6 },
  ],
  quantityById: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      const isInCart = state.cart.some((e) => e.id === action.payload.id);
      if (isInCart) {
        let newCart = state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          } else {
            return product;
          }
        });
        return { ...state, cart: newCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case "REMOVE_ONE":
      let newCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cart: newCart,
      };
    case "GET_QUANTITY":
      let productSelected = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (productSelected) {
        return { ...state, quantityById: productSelected.quantity };
      } else {
        return { ...state, quantityById: 0 };
      }
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const data = {
    cart: state.cart,
    dispatch,
    quantityById: state.quantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
