import { useState } from 'react'

import './App.css'
import useToggle from './useToggle'

function App() {
  const [isvisible,toggle] = useToggle();
  const [isvisible1,toggle1] = useToggle();


  return (
    <>

    <button onClick={toggle}>
      {isvisible ? "Hide" : "Show"}
    </button>

    {isvisible && <h1>faisal</h1> }
  
    </>
  )
}

export default App
