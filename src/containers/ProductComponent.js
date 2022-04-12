import React from 'react'
import { useSelector } from 'react-redux'
//Display Component
const ProductComponent = () => {
  const { products } = useSelector((state) => state.allProduct)
  console.log(products)

  return (
    <div className="row">
      {products.map((product) => {
        const { id, title, image, price, category } = product
        return (
          <div className="column" key={id}>
            <img className="img" src={image} alt="" />
            <div className="title">{title}</div>
            <div className="price">$ {price}</div>
            <div className="category">{category}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductComponent
