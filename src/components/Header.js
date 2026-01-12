import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

// Updated navigation items with proper labels and paths
const navItems = [
  { name: "Home", path: "/" },
  { name: "Research Activities", path: "/research-activities" },
  { name: "Interesting News", path: "/interesting-news" },
  { name: "About", path: "/about" },
  { name: "Publications", path: "/publications" },
  { name: "Profile", path: "/profile" },
  { name: "User", path: "/user" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-gray-900/70 via-blue-900/50 to-gray-900/70 border-b border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            IWM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative text-gray-300 hover:text-cyan-300 transition duration-300 font-medium tracking-wide
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-cyan-400 to-purple-500
                hover:after:w-full after:transition-all after:duration-300
                ${isActive ? "text-cyan-400 after:w-full" : ""}`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-cyan-300 hover:bg-cyan-400/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
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

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        className={`md:hidden bg-gradient-to-b from-gray-950/95 via-blue-950/90 to-gray-950/95 backdrop-blur-xl border-t border-cyan-400/20 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-2">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 px-4 py-2 rounded-lg transition font-medium tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
