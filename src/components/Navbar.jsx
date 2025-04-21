import React, { useState } from "react";

function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function openResume() {
  window.open("files/resume.pdf", "_blank");
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 right-0 z-40 text-white transition-all duration-300 w-full">
      {/* Hamburger Menu for Mobile */}
      <div className="flex justify-end md:hidden p-4">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        }  md:flex flex-col md:flex-row font-display font-medium md:justify-end p-4 md:p-0`}
      >
        <div
          className="bg-black/90 hover:bg-white hover:text-black transition-colors duration-300 px-8 py-5 cursor-pointer text-center"
          onClick={() => {
            scrollToSection("#about");
            setIsOpen(false);
          }}
        >
          About
        </div>
        <div
          className="bg-black/90 hover:bg-white hover:text-black transition-colors duration-300 px-8 py-5 cursor-pointer text-center"
          onClick={() => {
            scrollToSection("#work");
            setIsOpen(false);
          }}
        >
          Work
        </div>
        <div
          className="bg-black/90 hover:bg-white hover:text-black transition-colors duration-300 px-8 py-5 cursor-pointer text-center"
          onClick={() => {
            scrollToSection("#experience");
            setIsOpen(false);
          }}
        >
          Experience
        </div>
        <div
          className="bg-black/90 hover:bg-white hover:text-black transition-colors duration-300 px-8 py-5 cursor-pointer text-center"
          onClick={() => {
            scrollToSection("#contact");
            setIsOpen(false);
          }}
        >
          Contact
        </div>
        <div
          className="bg-black/90 hover:bg-white hover:text-black transition-colors duration-300 px-8 py-5 cursor-pointer text-center"
          onClick={() => {
            openResume();
            setIsOpen(false);
          }}
        >
          Resume
        </div>
      </div>
    </nav>
  );
}

export default Nav;