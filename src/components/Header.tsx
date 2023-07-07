import { MouseEventHandler } from 'react'
import { Font } from '../App'
import logo from '../assets/book_logo.svg'

function Header({ toggleTheme, setFont }: {
  toggleTheme: MouseEventHandler
  setFont: (font: Font) => void
}) {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="Dictionary logo" />
      <div className="Header__settings">
        <select onChange={(e) => setFont(e.target.value as Font)}>
          <option value={Font.SansSerif}>Sans Serif</option>
          <option value={Font.Serif}>Serif</option>
          <option value={Font.Mono}>Mono</option>
        </select>
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </header>
  )
}

export default Header
