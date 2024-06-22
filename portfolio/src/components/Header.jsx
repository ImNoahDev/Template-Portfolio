import React from 'react';

const Header = ({ setCurrentSection }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-dark-bg border-b border-gray-700">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-light-yellow" onClick={() => setCurrentSection('about')}>About</a></li>
          <li><a href="#repositories" className="hover:text-light-yellow" onClick={() => setCurrentSection('repositories')}>Repositories</a></li>
          <li><a href="#contact" className="hover:text-light-yellow" onClick={() => setCurrentSection('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
