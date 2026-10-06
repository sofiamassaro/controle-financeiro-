// Toda leitura e gravação no localStorage passa por aqui. Assim os componentes
// não dependem de como os dados são guardados: na Sprint 3, trocar o
// localStorage por uma API muda só este arquivo.

// Prefixo com o nome do app evita conflito com outros projetos que rodam no
// mesmo endereço (localhost:5173) e também usam localStorage.
const CHAVE = 'controle-financeiro:transacoes'

// Retorna as transações salvas ou, se não houver nada válido, a lista padrão.
export function carregarTransacoes(padrao) {
  try {
    const salvo = localStorage.getItem(CHAVE)

    // null significa "nunca salvou nada" (primeiro acesso). É diferente de
    // "[]", que significa que o usuário excluiu tudo e deve continuar vazio.
    if (salvo === null) {
      return padrao
    }

    const transacoes = JSON.parse(salvo)

    // Se alguém alterou o valor no DevTools e ele deixou de ser uma lista,
    // usamos o padrão em vez de deixar o app quebrar mais adiante.
    return Array.isArray(transacoes) ? transacoes : padrao
  } catch {
    // JSON corrompido ou localStorage bloqueado pelo navegador:
    // o app continua funcionando com a lista padrão.
    return padrao
  }
}

// Grava a lista inteira. Retorna true se deu certo e false se falhou, para
// quem chamou poder avisar o usuário.
export function salvarTransacoes(transacoes) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(transacoes))
    return true
  } catch {
    // Pode falhar se o armazenamento estiver cheio ou bloqueado
    // (por exemplo, em algumas janelas anônimas).
    return false
  }
}