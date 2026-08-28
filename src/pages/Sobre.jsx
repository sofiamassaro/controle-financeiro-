const TECNOLOGIAS = ['React', 'Vite', 'React Router', 'lucide-react', 'CSS puro']

function Sobre() {
  return (
    <section className="pagina">
      <h1>Sobre</h1>

      <h2>O problema</h2>
      <p>
        Muita gente perde o controle das finanças por registrar gastos em
        anotações soltas ou planilhas confusas. Sem uma visão clara do saldo,
        fica difícil planejar. O Controle Financeiro ajuda a organizar
        receitas e despesas do dia a dia, mostrando para onde vai o dinheiro.
      </p>

      <h2>Tecnologias</h2>
      <ul>
        {TECNOLOGIAS.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      <h2>Equipe</h2>
      <p>
        Projeto desenvolvido para a disciplina de Desenvolvimento Front-End II
        (ADS), como parte da avaliação incremental em sprints.
      </p>
    </section>
  )
}

export default Sobre
