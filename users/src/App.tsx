// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home'
import { Router } from './Router'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <RouterProvider router={Router}/>
    </>
  )
}

export default App
