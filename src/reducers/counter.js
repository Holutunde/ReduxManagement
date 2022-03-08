/* eslint-disable default-case */

const counterReducer = (state = 'Tolu', action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state
    case 'DECREMENT':
      return !state
  }
}

export default counterReducer

// const counterReducer = (state = 'Olu', action) => {
//   switch (action.type) {
//     case 'SIGN_IN':
//       return !state
//     default:
//       return state
//   }
// }

// export default counterReducer

// const initialState = {
//   dashboardData: null,
//   pendingFiles: null,
// }

// const counterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'GET_DASHBOARD_DATA':
//       return {
//         ...state,
//         dashboardData: payload,
//       }
//     case 'GET_PENDING_FILES':
//       return {
//         ...state,
//         pendingFiles: payload,
//       }
//     default:
//       return state
//   }
// }

// export default counterReducer
