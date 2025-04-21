import React from "react";

function Certs() {
  return (
    <div className="bg-black/80 rounded-lg p-8 border border-white/20 max-w-5xl mx-auto">
      <h3 className="text-xl font-display font-medium text-white mb-6">
        Achievements, Training & Certifications
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "First Place",
            org: "Digital Innovation Fair 2018",
            desc: "Won 1st place for developing a Drug Addiction Recovery System, featured in a national newspaper.",
            linkText: null,
            linkHref: null,
          },
          {
            title: "Software Engineering Fellowship",
            org: "Headstarter • Aug 2024",
            desc: "Completed fellowship with hands-on full-stack development experience.",
            linkText: null,
            linkHref: null,
          },
          {
            title: "Introduction to Programming with MATLAB",
            org: "Vanderbilt University • Jun 2024",
            desc: "Credential ID: Z6HMC9DS5LSM - ",
            linkText: "View Credential",
            linkHref: "#",
          },
          {
            title: "Developing AI Applications with Python and Flask",
            org: "IBM • Jan 2024",
            desc: "Credential ID: HV6QNTGU2KHY - ",
            linkText: "View Credential",
            linkHref: "#",
          },
          {
            title: "Programming in C++ Specialization",
            org: "Codio • Dec 2023",
            desc: "Credential ID: MNYQFWD4JX4P - ",
            linkText: "View Credential",
            linkHref: "#",
          },
          {
            title: "Python for Data Science, AI & Development",
            org: "IBM • Nov 2023",
            desc: "Credential ID: 4LK9Y375MAQ7 - ",
            linkText: "View Credential",
            linkHref: "#",
          },
        ].map(({ title, org, desc, linkText, linkHref }) => (
          <div key={title}>
            <h4 className="text-lg font-display font-medium text-white">
              {title}
            </h4>
            <p className="text-gray-300 font-medium">{org}</p>
            <p className="mt-2 text-gray-300">
              {desc}
              {linkText && (
                <a
                  href={linkHref}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkText}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certs;