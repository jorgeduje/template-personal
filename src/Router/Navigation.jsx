import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const navigation = [
  {
    id: "home",
    path: "/",
    title: "Inicio",
    Icon: HomeIcon
  },
  {
    id: "products",
    path: "/products",
    title: "Tienda",
    Icon: StoreIcon
  },
  {
    id: "cart",
    path: "/cart",
    title: "Carrito",
    Icon: ShoppingCartIcon
  }
];