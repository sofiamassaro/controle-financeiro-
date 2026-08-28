# Controle Financeiro

Aplicação web para organizar receitas e despesas do dia a dia, ajudando o
usuário a enxergar para onde vai o seu dinheiro.

Projeto da disciplina de Desenvolvimento Front-End II (ADS), com avaliação
incremental em três sprints. Esta entrega corresponde à **Sprint 1**.

## Funcionalidades (Sprint 1)

- Navegação entre três páginas: Início, Transações e Sobre.
- Painel com saldo, total de receitas e total de despesas.
- Lista de transações com filtro por tipo (todas/receita/despesa) e busca
  por descrição.
- Exclusão de transações (em memória).

## Tecnologias

- React + Vite (JavaScript)
- react-router-dom
- lucide-react
- CSS puro

## Como rodar

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

Outros comandos:

```bash
npm run build   # build de produção
npm run lint    # checagem de lint
```

## Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.jsx         Menu de navegação
│   ├── ResumoCard.jsx     Card de resumo (saldo/receitas/despesas)
│   └── TransacaoItem.jsx  Linha de uma transação
├── pages/
│   ├── Inicio.jsx         Painel com o resumo financeiro
│   ├── Transacoes.jsx     Lista com filtro e busca
│   └── Sobre.jsx          Informações do projeto
├── data/
│   └── transacoesIniciais.js
├── utils/
│   └── formato.js         Formatação de moeda (R$)
├── App.jsx                Estado principal + rotas
├── main.jsx               Ponto de entrada (BrowserRouter)
└── index.css              Estilos
```
