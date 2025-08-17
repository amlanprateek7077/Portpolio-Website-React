const experiences = [
    {
    role: "Web Developer Intern",
    company: "Cognifyz Technologies",
    period: "2025 June - 2025 July",
    description:
      "Worked on real-world client projects, implemented authentication, dashboards, and optimized APIs using Node.js & Express.",
  },
  {
    role: "Full Stack Developer",
    company: "IWT Summer Internship Camp",
    period: "2024 may - 2024 July",
    description:
      "Built responsive and modern web applications using React, TailwindCSS, and Framer Motion with focus on performance and UX.",
  },


  {
    role: "Marketing Communication Intern",
    company: "Plugg.network",
    period: "2023 march - 2023 August",
    description:
      "Assisted in marketing strategies, curated social media content, and monitored campaign performance for client projects.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.period}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
