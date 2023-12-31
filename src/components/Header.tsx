import { MouseEvent, useRef, useContext } from 'react'
import { Font, Theme } from '../types'
import logo from '../assets/book_logo.svg'
import toggleOff from '../assets/dark_mode_off.svg'
import toggleOn from '../assets/dark_mode_on.svg'
import caretDownIcon from '../assets/caret-down.svg'
import { AppContext } from '../state/context'
import { setFont, setTheme } from '../state/actions'

function Header() {
  const { state, dispatch } = useContext(AppContext)
  const { theme } = state
  const fontSelectorRef = useRef<HTMLElement>(null)

  function toggleTheme() {
    dispatch(setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light))
  }

  function changeFont(e: MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement
    dispatch(setFont(target.dataset.font as Font))
    if (fontSelectorRef.current) {
      const summaryTextEl = fontSelectorRef.current.querySelector('span') as HTMLSpanElement
      summaryTextEl.innerText = target.innerText
      fontSelectorRef.current.parentElement?.removeAttribute('open')
    }
  }

  function openFontSelector() {
    fontSelectorRef.current?.parentElement?.setAttribute('open', 'open')
  }

  function closeFontSelector() {
    fontSelectorRef.current?.parentElement?.removeAttribute('open')
  }

  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="Dictionary logo" />
      <div className="Header__settings">
        <details
          onMouseOver={openFontSelector}
          onMouseOut={closeFontSelector}
          className="Header__font-selector"
        >
          <summary ref={fontSelectorRef}>
            <span>Sans Serif</span>
            <img src={caretDownIcon} alt="Down caret icon" />
          </summary>
          <div
            className="Header__font-selector__dropdown-wrapper"
            onMouseOver={openFontSelector}
            onMouseOut={closeFontSelector}
          >
            <ul>
              <li onClick={changeFont} data-font={Font.SansSerif}>Sans Serif</li>
              <li onClick={changeFont} data-font={Font.Serif}>Serif</li>
              <li onClick={changeFont} data-font={Font.Mono}>Mono</li>
            </ul>
          </div>
        </details>
        <div className="Header__verticalRuler"></div>
        <img
          src={theme === Theme.Light ? toggleOff : toggleOn}
          onClick={toggleTheme}
          className="Header__toggle"
          alt="Color theme toggle button"
        />
      </div>
    </header>
  )
}

export default Header
