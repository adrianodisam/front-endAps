import React from 'react';
import Svg from '../svg/Svg';
import style from './Header.module.css';
const Header = () => {
  return (
    <header className={style.header}>
      <Svg />
    </header>
  );
};
export default Header;
