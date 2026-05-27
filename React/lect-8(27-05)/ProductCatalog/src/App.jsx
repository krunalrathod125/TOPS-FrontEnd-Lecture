import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fruit from './components/Fruit'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fruit/>
    </>
  )
}

export default App
