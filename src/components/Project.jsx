import React from "react";

function Projects() {
  return (
    <section id="work" className="mb-32 bg-black/90 text-white py-12 px-4">
      <div className="flex items-center mb-10 justify-center">
        <h2 className="text-3xl font-display font-medium text-white">
          Featured Work
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Project 1 */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-4">
            Predicting Undergraduate Admission Outcomes in Bangladesh
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Developed and deployed a machine learning model to predict
            undergraduate admission outcomes in Bangladesh. Achieved 83.87%
            accuracy and 0.8633 ROC-AUC by optimizing feature selection and
            hyperparameter tuning. Conducted SHAP analysis to identify key
            predictors (e.g., family support, GPA), providing actionable
            insights.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "scikit-learn", "XGBoost", "SHAP", "Pandas"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
          <div className="flex gap-6">
            <a
              href="https://u-admission.streamlit.app"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🔗</span> Live Demo
            </a>
            <a
              href="https://github.com/Ashfinn/undergraduate-admission-research"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span> Source
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-4">
            Environmental Determinants of Diarrheal Disease
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Built and compared multiple regression models (Linear Regression,
            Random Forest, SVR, Decision Tree, Gradient Boost) for disease trend
            prediction. Incorporated lagged features 0-7 days to achieve best
            performance with Linear Regression RMSE: 7.40, MSE: 54.82. Analyzed
            time-series data across four major divisions to identify key
            environmental correlations. Designed an interactive dashboard with
            real-time visualizations for insights.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "SARIMA", "XGBoost", "Linear Regression", "Plotly"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
          <div className="flex gap-6">
            <a
              href="https://diarrhea-pm.streamlit.app/"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🔗</span> Live Demo
            </a>
            <a
              href="https://github.com/Ashfinn/Diarrhea-Prediction-Model"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span> Source
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-4">
            Shell Client (Fish)
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lightweight shell client in C++ with robust command support and
            process management.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["C++", "Systems"].map((skill) => (
              <span
                key={skill}
                className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/Ashfinn"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span> Source
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-4">
            IMDB Sentiment Analysis
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            NLP-based sentiment analysis of movie reviews with real-time
            prediction interface using Streamlit.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "NLTK", "Streamlit"].map((skill) => (
              <span
                key={skill}
                className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
            >
              <span className="mr-2">🔗</span> Live Demo
            </a>
            <a
              href="https://github.com/Ashfinn"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span> Source
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-4">
            MATLAB Hero
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Educational platform helping students master MATLAB programming with
            interactive tutorials.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Next.js", "MATLAB"].map((skill) => (
              <span
                key={skill}
                className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
            >
              <span className="mr-2">🔗</span> Live Demo
            </a>
            <a
              href="https://github.com/Ashfinn"
              className="text-white hover:text-gray-300 font-medium transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span> Source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;