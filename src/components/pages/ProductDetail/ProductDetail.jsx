import React from 'react'

const ProductDetail = ({product}) => {
  return (
    <div>
        <h1>{product?.name}</h1>
    </div>
  )
}

export default ProductDetail