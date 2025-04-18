import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NoteState>
        {/* Adding a Navbar Here */}
        <Navbar />

        {/* Setting some more Routes for different pages */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Adding page footer here regarding bottom links */}
        <Footer />
      </NoteState>
    </>
  )
}

export default App