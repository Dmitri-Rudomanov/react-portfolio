import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layot'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
