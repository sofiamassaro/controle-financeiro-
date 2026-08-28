import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Transacoes from './pages/Transacoes.jsx'
import NovaTransacao from './pages/NovaTransacao.jsx'
import Sobre from './pages/Sobre.jsx'
import transacoesIniciais from './data/transacoesIniciais.js'

function App() {
  // Estado principal fica aqui (fonte única) e desce por props, conforme convenção do projeto
  const [transacoes, setTransacoes] = useState(transacoesIniciais)

  function excluirTransacao(id) {
    setTransacoes((atual) => atual.filter((transacao) => transacao.id !== id))
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Inicio transacoes={transacoes} onExcluir={excluirTransacao} />}
          />
          <Route
            path="/transacoes"
            element={<Transacoes transacoes={transacoes} onExcluir={excluirTransacao} />}
          />
          <Route path="/nova" element={<NovaTransacao />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </>
  )
}

export default App
