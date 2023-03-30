import React, { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ProductsList from "./ProductsList";

const ProductsListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    setProductsList(products);
  }, []);

  return <ProductsList products={products}/>;
};

export default ProductsListContainer;
