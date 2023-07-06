import logo from '../assets/book_logo.svg'

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" />
      <div className="Header__settings">
        settings
      </div>
    </header>
  )
}

export default Header
