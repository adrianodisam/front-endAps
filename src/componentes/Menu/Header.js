import React from 'react';
import { AguaSvg } from '../svg/AguaSvg';
import { Floresta } from '../svg/Floresta';
import { Lixo } from '../svg/Lixo';

import style from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <button className="menu">Home</button>
      </Link>

      <Lixo />
      <AguaSvg />
      <Floresta />
    </header>
  );
};
export default Header;
