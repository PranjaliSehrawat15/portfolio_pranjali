import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block py-2 font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
