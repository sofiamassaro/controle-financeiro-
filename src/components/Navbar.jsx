import { NavLink } from 'react-router-dom'
import { Home, ArrowLeftRight, PlusCircle, Info } from 'lucide-react'

// className vem de uma função pois o NavLink precisa saber se o link está ativo
function classeLink({ isActive }) {
  return isActive ? 'navbar-link ativo' : 'navbar-link'
}

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-marca">Controle Financeiro</span>
      <div className="navbar-links">
        <NavLink to="/" end className={classeLink}>
          <Home size={18} />
          Início
        </NavLink>
        <NavLink to="/transacoes" className={classeLink}>
          <ArrowLeftRight size={18} />
          Transações
        </NavLink>
        <NavLink to="/nova" className={classeLink}>
          <PlusCircle size={18} />
          Nova Transação
        </NavLink>
        <NavLink to="/sobre" className={classeLink}>
          <Info size={18} />
          Sobre
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
