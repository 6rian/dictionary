import { MouseEventHandler } from 'react'
import { Font, Theme } from '../App'
import logo from '../assets/book_logo.svg'
import toggleOff from '../assets/dark_mode_off.svg'
import toggleOn from '../assets/dark_mode_on.svg'

function Header({ theme, toggleTheme, setFont }: {
  theme: Theme
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
        <img
          src={theme === Theme.Light ? toggleOff : toggleOn}
          onClick={toggleTheme}
          className="Header__toggle"
        />
      </div>
    </header>
  )
}

export default Header
