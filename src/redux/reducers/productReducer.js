import { ActionTypes } from '../constants/action-types'

const initialState = {
  products: [],
}
const productReducer = (state = initialState, { type, payload }) => {
  //The payload will be updated by the data received from the server
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    default:
      return state
  }
}

export default productReducer
