import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productSelected = products.find((product) => product.id === id);
    setProduct(productSelected);
  }, []);
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailContainer;
