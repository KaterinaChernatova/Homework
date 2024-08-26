import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/about">Про мене</Link>
        <Link to="/contact">Контакти</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
