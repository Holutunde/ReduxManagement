import React from 'react'

import { useSelector } from 'react-redux'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)
  return (
    <div className="App">
      <h3>The number of press is {counter}</h3>
      {isLogged ? <h1>OLUTUNDE</h1> : <h2>SOKUNBI</h2>}
    </div>
  )
}

export default App
