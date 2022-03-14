import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header" style={{ marginTop: '100' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
