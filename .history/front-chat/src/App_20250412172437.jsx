import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      This is main page <br />
      <button onClick={()=>{
        toast.success('Hello world')}
      }>Click Me</button>
    </div>
  )
}

export default App
