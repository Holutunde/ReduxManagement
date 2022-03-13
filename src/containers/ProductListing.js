import React, { useEffect } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productAction'

const ProductListing = () => {
  const { products } = useSelector((state) => state.allProducts)
  console.log(products[3])
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err)
      })
    dispatch(setProducts(response.data))
    //This will go to the action and will return the object taken by the reducer
    console.log(response)
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing
