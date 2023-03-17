import Cart from "../components/Cart/Cart";
import Home from "../components/Home/Home";
import ProductDetailContainer from "../components/ProductDetail/ProductDetail.container";
import ProductsListContainer from "../components/ProductsList/ProductsList.container";

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
