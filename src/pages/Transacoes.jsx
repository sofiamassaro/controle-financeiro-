import { useState } from 'react'
import TransacaoItem from '../components/TransacaoItem.jsx'

const FILTROS = [
  { valor: 'todas', rotulo: 'Todas' },
  { valor: 'receita', rotulo: 'Receitas' },
  { valor: 'despesa', rotulo: 'Despesas' },
]

function Transacoes({ transacoes, onExcluir }) {
  const [filtro, setFiltro] = useState('todas')
  const [busca, setBusca] = useState('')

  const transacoesFiltradas = transacoes.filter((transacao) => {
    const passaNoFiltro = filtro === 'todas' || transacao.tipo === filtro
    const passaNaBusca = transacao.descricao.toLowerCase().includes(busca.toLowerCase())
    return passaNoFiltro && passaNaBusca
  })

  return (
    <section className="pagina">
      <h1>Transações</h1>

      <div className="filtros">
        <div className="filtro-chips">
          {FILTROS.map((item) => (
            <button
              key={item.valor}
              type="button"
              className={filtro === item.valor ? 'chip ativo' : 'chip'}
              onClick={() => setFiltro(item.valor)}
            >
              {item.rotulo}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="busca-input"
          placeholder="Buscar por descrição..."
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />
      </div>

      {transacoesFiltradas.length === 0 ? (
        <p>Nenhuma transação encontrada.</p>
      ) : (
        <ul className="transacoes-lista">
          {transacoesFiltradas.map((transacao) => (
            <TransacaoItem key={transacao.id} transacao={transacao} onExcluir={onExcluir} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Transacoes
