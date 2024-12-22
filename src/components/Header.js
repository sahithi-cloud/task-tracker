import React from 'react';

const Header = ({ title, subtitle, darkMode, toggleDarkMode }) => {
  return (
    <header className="flex flex-col items-center bg-blue-500 text-white p-4 rounded-lg mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm mt-1">{subtitle}</p>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-700 transition"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
