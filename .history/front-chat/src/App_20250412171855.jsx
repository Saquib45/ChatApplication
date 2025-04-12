import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      This is main page <br />
      <button onClick={()=>{
        toast.success('Hello world')
      }>Click Me</button>
    </div>
  )
}

export default App
