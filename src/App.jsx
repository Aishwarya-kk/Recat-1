import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Index from '.'
import './App.css'

function App() {
  let[count,setCount]=useState(0);
  let getsum=()=>{
    setCount(count+1);
  }
  return(
    <>
    <h1>Increase Count IS :{count}</h1>
    <button onClick={getsum}>INCREASE</button>
    <Index name="aihsu" />
    </>
  )
}
export default App
