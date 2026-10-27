import code from '../img/code.svg'

const Header = () => (
  <header className='header'>
    <img className='header-icon' src={code} alt='Spinning code logo' />
    <h1 className='header-name'>
      Brianna<span>Mansell</span>
    </h1>
  </header>
)

export default Header
