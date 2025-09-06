import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Pranjali Sehrawat. All rights reserved.</p>
        <p className="mt-2">Made with React and ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;