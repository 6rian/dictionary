import { MouseEventHandler } from 'react'
import logo from '../assets/book_logo.svg'

function Header({ toggleTheme }: {
  toggleTheme: MouseEventHandler
}) {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="Dictionary logo" />
      <div className="Header__settings">
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </header>
  )
}

export default Header
