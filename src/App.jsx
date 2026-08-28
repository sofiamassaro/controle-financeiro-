import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Transacoes from './pages/Transacoes.jsx'
import Sobre from './pages/Sobre.jsx'

const transacoesIniciais = [
  { id: 1, descricao: 'Salário', categoria: 'Trabalho', valor: 3200, tipo: 'receita', data: '2026-08-05' },
  { id: 2, descricao: 'Supermercado', categoria: 'Alimentação', valor: 450, tipo: 'despesa', data: '2026-08-07' },
]

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
          <Route path="/" element={<Inicio transacoes={transacoes} />} />
          <Route
            path="/transacoes"
            element={<Transacoes transacoes={transacoes} onExcluir={excluirTransacao} />}
          />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </>
  )
}

export default App
