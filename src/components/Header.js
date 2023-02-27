import logoPath from '../images/logo/logo.svg'

function Header() {
  return (
    <header className="header header_position">
      <img src={logoPath} alt="логотип" className="header__logo" id="start" />
    </header>
  )
}

export default Header
