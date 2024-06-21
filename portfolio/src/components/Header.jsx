import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-dark-bg border-b border-gray-700">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-light-yellow">About</a></li>
          <li><a href="#portfolio" className="hover:text-light-yellow">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-light-yellow">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;