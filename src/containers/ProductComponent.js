import React from 'react'
import { useSelector } from 'react-redux'
//Display Component
const ProductComponent = () => {
  const { products } = useSelector((state) => state.allProduct)
  console.log(products)
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6" key={id}>
            <div class="card">
              <img src={image} alt={title} />

              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return <>{renderList}</>
}

export default ProductComponent
