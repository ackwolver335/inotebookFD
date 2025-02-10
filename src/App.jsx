import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {

  return (
    <>
      {/* Adding a Navbar Here */}
      <Navbar />

      {/* Setting some more Routes for different pages */}
      <Routes>
        <Route index element = {<Home />}/>
        <Route path = "/about" element = {<About />} />
      </Routes>
    </>
  )
}

export default App