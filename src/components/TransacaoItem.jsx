import { Trash2, TrendingUp, TrendingDown } from 'lucide-react'
import { formatarMoeda } from '../utils/formato.js'

function TransacaoItem({ transacao, onExcluir }) {
  const { id, descricao, categoria, valor, tipo, data } = transacao
  const eReceita = tipo === 'receita'

  return (
    <li className={`transacao-item transacao-item--${tipo}`}>
      <div className="transacao-info">
        {eReceita ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
        <div>
          <p className="transacao-descricao">{descricao}</p>
          <p className="transacao-detalhes">
            {categoria} · {data}
          </p>
        </div>
      </div>
      <div className="transacao-acoes">
        <span className="transacao-valor">
          {eReceita ? '+' : '-'} {formatarMoeda(valor)}
        </span>
        <button type="button" onClick={() => onExcluir(id)} aria-label={`Excluir ${descricao}`}>
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  )
}

export default TransacaoItem
