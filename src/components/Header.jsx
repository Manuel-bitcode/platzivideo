import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <img className='header__img' src='../assets/logo-platzi-video.png' alt='platzi Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src='' alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesion</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
