import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeConfig";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ProductsListContainer from "./components/ProductsList/ProductsList.container";
import Cart from "./components/Cart/Cart";
import ProductDetailContainer from "./components/ProductDetail/ProductDetail.container";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsListContainer />} />
              <Route
                path="/products/:id"
                element={<ProductDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Navbar>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
