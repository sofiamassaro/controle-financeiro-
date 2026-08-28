import { formatarMoeda } from '../utils/formato.js'

// Apresentacional: só recebe dados prontos e exibe, sem calcular nada
function ResumoCard({ titulo, valor, tipo }) {
  return (
    <div className={`resumo-card resumo-card--${tipo}`}>
      <p className="resumo-card-titulo">{titulo}</p>
      <p className="resumo-card-valor">{formatarMoeda(valor)}</p>
    </div>
  )
}

export default ResumoCard
