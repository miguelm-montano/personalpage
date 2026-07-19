import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing    from './pages/Landing'
import Home       from './pages/Home'
import About      from './pages/About'
import Projects   from './pages/Projects'
import Experience from './pages/Experience'
import Contact    from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Landing />}    />
        <Route path="/home"       element={<Home />}       />
        <Route path="/about"      element={<About />}      />
        <Route path="/projects"   element={<Projects />}   />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact"    element={<Contact />}    />
      </Routes>
    </BrowserRouter>
  )
}
