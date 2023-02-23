import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CartContextProvider from "./context/CartContext";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeConfig";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ProductsListContainer from "./components/ProductsList/ProductsList.container";


function App() {
  return <BrowserRouter>
  <ThemeProvider theme={theme}>
    <CartContextProvider>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductsListContainer />}
          />
          <Route
            path="/products/:id"
            element={<div>Aca el detalle del producto</div>}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Navbar>
    </CartContextProvider>
  </ThemeProvider>
</BrowserRouter>
}

export default App;
