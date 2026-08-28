import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Transacoes from './pages/Transacoes.jsx'
import Sobre from './pages/Sobre.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/transacoes" element={<Transacoes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </>
  )
}

export default App
