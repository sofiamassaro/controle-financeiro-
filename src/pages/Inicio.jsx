import ResumoCard from '../components/ResumoCard.jsx'
import TransacaoItem from '../components/TransacaoItem.jsx'

const QUANTIDADE_PREVIA = 5

function Inicio({ transacoes, onExcluir }) {
  const totalReceitas = transacoes
    .filter((transacao) => transacao.tipo === 'receita')
    .reduce((soma, transacao) => soma + transacao.valor, 0)

  const totalDespesas = transacoes
    .filter((transacao) => transacao.tipo === 'despesa')
    .reduce((soma, transacao) => soma + transacao.valor, 0)

  const saldo = totalReceitas - totalDespesas

  // Mais recentes primeiro, para a prévia mostrar o que aconteceu por último
  const ultimasTransacoes = [...transacoes]
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, QUANTIDADE_PREVIA)

  return (
    <section className="pagina">
      <h1>Início</h1>

      <div className="resumo-grid">
        <ResumoCard titulo="Saldo" valor={saldo} tipo={saldo >= 0 ? 'receita' : 'despesa'} />
        <ResumoCard titulo="Receitas" valor={totalReceitas} tipo="receita" />
        <ResumoCard titulo="Despesas" valor={totalDespesas} tipo="despesa" />
      </div>

      <h2>Últimas transações</h2>
      {ultimasTransacoes.length === 0 ? (
        <p>Nenhuma transação registrada.</p>
      ) : (
        <ul className="transacoes-lista">
          {ultimasTransacoes.map((transacao) => (
            <TransacaoItem key={transacao.id} transacao={transacao} onExcluir={onExcluir} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Inicio
