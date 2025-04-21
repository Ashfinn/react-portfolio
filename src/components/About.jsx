import React from "react";

function About() {
  return (
    <section id="about" className="mb-32 text-white py-12 px-4">
      <div className="flex items-center mb-10 justify-center">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Education & Background */}
        <div className="bg-black/80 p-8 border border-white/20 rounded-lg shadow-lg">
          <h3 className="text-xl font-display font-medium text-orange-400 mb-6">
            Education & Background
          </h3>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              <strong>University of Chittagong</strong> - BSc in Mathematics
              (Expected Dec 2026), Chittagong, Bangladesh
            </p>
            <p>
              <strong>Relevant Coursework:</strong> Complex Analysis, Numerical
              Analysis, Differential Equations, Vector & Tensor Analysis, Linear
              Programming, Linear Algebra, Calculus, Real Analysis, Geometry,
              Trigonometry, Mathematical Programming
            </p>
            <p>
              Content creator with 10+ educational videos on ML, Mathematics,
              and Programming on YouTube, and 13 articles with 1000+ reads on
              Python and ML topics on Hashnode.
            </p>
          </div>
        </div>
        {/* Technical Skills */}
        <div className="bg-black/80 p-8 border border-white/20 rounded-lg shadow-lg">
          <h3 className="text-xl font-display font-medium text-orange-400 mb-6">
            Technical Skills
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-display font-medium mb-3">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Python
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  C++
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  JavaScript
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  HTML
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  CSS
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-display font-medium mb-3">
                Machine Learning & Data Science
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  scikit-learn
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Pandas
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  NumPy
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-display font-medium mb-3">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Git
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Streamlit
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Matplotlib
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Plotly
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  Firebase
                </span>
                <span className="bg-white text-black px-3 py-1 text-sm border border-white/20 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  LaTeX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;