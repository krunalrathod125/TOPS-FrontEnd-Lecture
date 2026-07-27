import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fruit from './components/Fruit'
import CrudPractice from './lect(29-05)/Crud-Practice'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Fruit/> */}
      <CrudPractice/>
    </>
  )
}

export default App
