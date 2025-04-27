import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'

// using alertState regarding the alert of the Page
import AlertState from './context/alert/AlertState'

function App() {

  return (
    <>
      <AlertState>
        <NoteState>
          {/* Adding a Navbar Here */}
          <Navbar />

          {/* Setting some more Routes for different pages */}
          <Routes>
            <Route index element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          {/* Adding page footer here regarding bottom links */}
          <Footer />
        </NoteState>
      </AlertState>
    </>
  )
}

export default App