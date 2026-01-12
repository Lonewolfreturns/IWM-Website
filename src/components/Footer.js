import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 border-t border-cyan-400/20 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.1)] py-6">
      {/* Radial glow behind */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
            IWM
          </span>{" "}
          — All rights reserved.
        </p>

        <div className="flex space-x-5">
          <a
            href="mailto:info@researchgroup.ca"
            className="text-gray-400 hover:text-cyan-300 transition duration-300"
          >
            Contact
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-300 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="text-gray-400 hover:text-cyan-300 transition duration-300"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
