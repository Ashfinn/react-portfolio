import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-black/90 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300 mb-4 font-display font-medium">
          © 2025 Obidur Rahman. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Ashfinn"
            className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://linkedin.com/in/obidur-rahman-shawal"
            className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://www.ashfinn.github.io"
            className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faGlobe} size="xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;