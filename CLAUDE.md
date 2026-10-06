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
incremental em três sprints. **Projeto individual.** A Sprint 1 (N1) foi
entregue; **a entrega atual é a Sprint 2 (N2).** Mantenha o escopo da Sprint 2:
não implemente ainda recursos da Sprint 3.

O que a Sprint 2 exige: formulário controlado com `useState` (mínimo 3 campos),
listagem dinâmica dos itens cadastrados, persistência com `localStorage` (os
dados permanecem após recarregar), componentes `.jsx` com responsabilidades
claras, lógica de negócio em `src/services/` e README que permita clonar, rodar
`npm install` e `npm run dev` sem erros. O app não pode ter erros no console.

O código precisa ser legível e explicável: o professor faz perguntas sobre
qualquer parte, incluindo as alternativas consideradas.

Não utilize emojis nos comentários 

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
- Separe lógica de apresentação:
  - `services/` guarda as regras do domínio (cálculo de totais e saldo) e o
    acesso ao `localStorage`. Componentes nunca chamam `localStorage` direto.
  - `utils/` guarda formatação genérica (moeda, data).
- Props bem definidas; evite props drilling desnecessário. O estado principal
  vive no `App.jsx` (fonte única) e desce por props.
- Operações que podem falhar (como ler o `localStorage`) usam `try/catch` e
  nunca derrubam a aplicação; erros de validação do formulário aparecem para o
  usuário com mensagens claras.
- **Não usar chamadas a API (isso é Sprint 3).**
- Commits pequenos, um por passo, no padrão `tipo: descrição` (`feat`, `fix`,
  `refactor`, `style`, `docs`, `chore`).

## Estrutura alvo

```
src/
├── components/
│   ├── Navbar.jsx         Menu de navegação
│   ├── ResumoCard.jsx     Card de resumo (saldo/receitas/despesas)
│   ├── TransacaoForm.jsx  Formulário controlado de cadastro
│   └── TransacaoItem.jsx  Linha de uma transação
├── pages/
│   ├── Inicio.jsx         Painel com o resumo financeiro
│   ├── Transacoes.jsx     Lista com filtro e busca
│   ├── NovaTransacao.jsx  Página de cadastro (usa TransacaoForm)
│   └── Sobre.jsx          Informações do projeto
├── services/
│   ├── transacoesStorage.js  Leitura e gravação no localStorage
│   └── financeiro.js         Cálculo de receitas, despesas e saldo
├── data/
│   └── transacoesIniciais.js  Exemplos usados no primeiro acesso
├── utils/
│   └── formato.js         Formatação de moeda (R$) e data
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

- **Sprint 1 (entregue):** componentes, estado (`useState`), eventos
  (`onClick`, `onChange`), navegação entre páginas, cálculo de saldo, filtro,
  busca e exclusão de transações (em memória).
- **Sprint 2 (atual):** formulário controlado para cadastrar transações e
  persistência com `localStorage`.
- **Sprint 3 (depois):** consumo de API RESTful com CRUD completo.

## Plano de construção da Sprint 2

Fazer **um passo por vez** e commitar depois de cada, com mensagem clara.

1. **Contexto:** atualizar este arquivo para a Sprint 2.
2. **Service de armazenamento:** `services/transacoesStorage.js` com
   `carregarTransacoes(padrao)` e `salvarTransacoes(transacoes)`. A leitura usa
   `try/catch`; `null` (nada salvo) é diferente de `[]` (usuário excluiu tudo).
3. **Persistência no App:** `useState` com inicialização preguiçosa a partir do
   storage, `useEffect` que salva a cada mudança e função
   `adicionarTransacao(transacao)`.
4. **Service financeiro:** `services/financeiro.js` com
   `calcularResumo(transacoes)`; `Inicio.jsx` só exibe o resultado.
5. **Formulário:** `TransacaoForm.jsx` controlado (descrição, valor, tipo,
   categoria, data), com validação, conversão do valor com `Number()` e
   mensagens de erro.
6. **Página Nova Transação:** usa o formulário, chama `onAdicionar` e leva para
   `/transacoes` após salvar.
7. **Usabilidade:** data em formato brasileiro, menu responsivo no celular,
   `index.html` em pt-BR e confirmação antes de excluir.
8. **Dependências:** `npm audit fix`.
9. **Documentação:** README e página Sobre atualizados para a Sprint 2, com
   autoria individual.
10. **Validação final:** clone limpo, `npm install`, `npm run dev`, console sem
    erros, cadastro persistindo após recarregar, exclusão total persistindo e
    `localStorage` corrompido sem derrubar o app.

Depois de cada passo, revisar o diff, testar no navegador e commitar.