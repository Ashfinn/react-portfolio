import React from "react";

function Experience() {
  return (
    <section id="experience" className="mb-32 bg-black/90 text-white py-12 px-4">
      <div className="flex items-center mb-10 justify-center">
        <h2 className="text-3xl font-display font-medium text-white">
          Experience & Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
        {/* Professional Experience */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-6">
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-display font-medium text-white">
                Software Engineering Fellowship
              </h4>
              <p className="text-gray-300 font-medium">
                Headstarter • Aug 2024
              </p>
              <ul className="mt-3 space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
                <li>
                  Developed five full-stack web applications using Firebase,
                  Git, and JavaScript.
                </li>
                <li>
                  Worked collaboratively in a team of four developers, following
                  agile methodologies to deliver projects on time.
                </li>
                <li>
                  Built features including user authentication, real-time data
                  updates, and responsive UI.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Firebase", "Git", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Engagements */}
        <div className="bg-black/80 rounded-lg p-8 border border-white/20">
          <h3 className="text-xl font-display font-medium text-white mb-6">
            Social Engagements
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-display font-medium text-white">
                Founder & Community Lead
              </h4>
              <p className="text-gray-300 font-medium">
                The Code Forum • 2023-Present
              </p>
              <ul className="mt-3 space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
                <li>
                  Built a tech community with 100+ members and established 5
                  learning paths.
                </li>
                <li>
                  Organized workshops and coding challenges to foster skill
                  development.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display font-medium text-white">
                Research and Development Secretary
              </h4>
              <p className="text-gray-300 font-medium">
                Chittagong University Math Club • 2023-Present
              </p>
              <ul className="mt-3 space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
                <li>
                  Led research initiatives and organized knowledge-sharing
                  events.
                </li>
                <li>
                  Facilitated workshops bridging mathematics and programming.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display font-medium text-white">
                Educator
              </h4>
              <p className="text-gray-300 font-medium">
                All Students in One Platform • 2023-Present
              </p>
              <ul className="mt-3 space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
                <li>
                  Mentored admission candidates in an educational initiative by
                  University of Chittagong students.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;