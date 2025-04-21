import React from "react";

function Contact() {
  return (
    <section id="contact" className="mb-32 bg-black/90 text-white py-12 px-4">
      <div className="flex items-center mb-10 justify-center">
        <h2 className="text-3xl font-display font-medium text-white">
          Let's Connect
        </h2>
      </div>
      <div className="bg-black/80 p-8 md:p-12 border border-white/20 max-w-2xl mx-auto text-center">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Passionate about collaborating on projects blending mathematics and
          code. Reach out to discuss ideas, opportunities, or just to chat about
          tech!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:obidur.shawal@gmail.com"
            className="bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <span role="img" aria-label="email" className="mr-2">
              📧
            </span>
            Email
          </a>
          <a
            href="https://github.com/Ashfinn"
            className="bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <span role="img" aria-label="github" className="mr-2">
              🐙
            </span>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/obidur-rahman-shawal"
            className="bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <span role="img" aria-label="linkedin" className="mr-2">
              🔗
            </span>
            LinkedIn
          </a>
          <a
            href="https://www.ashfinn.github.io"
            className="bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 border border-white/20 flex items-center justify-center"
          >
            <span role="img" aria-label="website" className="mr-2">
              🌐
            </span>
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;