import React from 'react'

const ProductDetail = ({product}) => {
    console.log(product)
  return (
    <div>
        <h1>{product?.name}</h1>
    </div>
  )
}

export default ProductDetail