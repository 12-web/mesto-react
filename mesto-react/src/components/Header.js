import headerLogo from '../images/logo-light.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={headerLogo} alt='Логотип Местро' className='header__logo' />
    </header>
  );
};

export default Header;
