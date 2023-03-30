import Cart from "../components/pages/Cart/Cart";
import Home from "../components/pages/Home/Home";
import ProductDetailContainer from "../components/pages/ProductDetail/ProductDetail.container";
import ProductsListContainer from "../components/pages/ProductsList/ProductsList.container";

export const MenutItems = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "productsDetail",
    path: "/products/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "products",
    path: "/products",
    Element: ProductsListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
];
