# Controle Financeiro — Contexto do Projeto

Este arquivo orienta o Claude Code. Leia-o antes de qualquer alteração e siga
as convenções abaixo.

## Sobre o projeto

Aplicação web para organizar receitas e despesas do dia a dia, ajudando o
usuário a enxergar para onde vai o seu dinheiro.

- **Problema:** muita gente perde o controle das finanças por registrar gastos
  em anotações soltas ou planilhas confusas; sem uma visão clara do saldo, fica
  difícil planejar.
- **Usuário-alvo:** pessoa que quer acompanhar as próprias finanças pessoais.

## Contexto acadêmico (importante)

Trabalho da disciplina de Desenvolvimento Front-End II (ADS), com avaliação
incremental em três sprints. **A entrega atual é a Sprint 1 (N1).** Mantenha o
escopo da Sprint 1 — não implemente ainda recursos das sprints seguintes.

O que a Sprint 1 valoriza na nota: aplicação React com Vite rodando no
navegador, componentes/estado/eventos demonstráveis, e navegação com pelo menos
3 páginas. O código precisa ser legível e explicável (o professor faz perguntas
sobre qualquer parte).

## Stack

- React + Vite (JavaScript, sem TypeScript)
- react-router-dom — navegação entre páginas
- lucide-react — ícones
- CSS puro (sem Bootstrap ou frameworks de UI)

## Comandos

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run lint` — checagem de lint

## Convenções de código

- Componentes funcionais, um por arquivo `.jsx`.
- Nomes descritivos: `TransacaoItem.jsx`, não `Item.jsx`.
- Comentários curtos em português explicando o "porquê" das decisões.
- Separe lógica de apresentação: cálculos e formatação ficam em `utils/`, fora
  dos componentes visuais.
- Props bem definidas; evite props drilling desnecessário. O estado principal
  vive no `App.jsx` (fonte única) e desce por props.
- **Não usar `localStorage` (isso é Sprint 2) nem chamadas a API (Sprint 3).**

## Estrutura alvo

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

## Modelo de dados

Cada transação é um objeto:

```js
{ id: 1, descricao: 'Salário', categoria: 'Trabalho', valor: 3200, tipo: 'receita', data: '2026-08-05' }
```

`tipo` só pode ser `'receita'` ou `'despesa'`. `valor` é sempre positivo (o
tipo é quem define se soma ou subtrai).

## Escopo por sprint

- **Sprint 1 (atual):** componentes, estado (`useState`), eventos (`onClick`,
  `onChange`), navegação entre 3 páginas, cálculo de saldo, filtro, busca e
  exclusão de transações (tudo em memória).
- **Sprint 2 (depois):** formulário controlado para cadastrar transações e
  persistência com `localStorage`.
- **Sprint 3 (depois):** consumo de API RESTful com CRUD completo.

## Plano de construção da Sprint 1

Fazer **um passo por vez** e commitar depois de cada, com mensagem clara.

1. **Navegação e layout base:** `BrowserRouter` no `main.jsx`; no `App.jsx`,
   rotas para `/` (Início), `/transacoes` (Transações) e `/sobre` (Sobre),
   com o `Navbar` acima. `Navbar.jsx`: menu com `NavLink` marcando a página
   ativa e ícones do lucide-react.
2. **Estado das transações:** `useState` no `App.jsx` com a lista inicial;
   função `excluirTransacao(id)`; passar `transacoes` e `onExcluir` por props.
3. **Dados, utilitário e componentes de exibição:** `data/transacoesIniciais.js`
   (cerca de 6 exemplos, receitas e despesas); `utils/formato.js` com
   `formatarMoeda`; `ResumoCard.jsx` (apresentacional) e `TransacaoItem.jsx`
   (recebe a transação e `onExcluir` por props).
4. **Página Início:** calcular total de receitas, total de despesas e saldo a
   partir das transações; exibir três `ResumoCard` e uma prévia das últimas.
5. **Página Transações:** estado local de filtro (todas/receita/despesa) e de
   busca; chips com `onClick` e input com `onChange`; listar `TransacaoItem`
   filtrados; exclusão via `onExcluir`; mensagem de estado vazio.
6. **Página Sobre, estilos e README:** conteúdo da Sobre (problema,
   tecnologias, equipe), `index.css` limpo e `README.md` com instruções.

Depois de cada passo, revisar o diff, testar no navegador e commitar.
