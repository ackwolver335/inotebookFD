import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* Adding a Navbar Here */}
      <Navbar  />
      <Home />
    </>
  )
}

export default App