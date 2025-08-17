const projects = [
  {
    title: "EduWeb App",
    description:
      "A full-stack education platform with student/teacher dashboards, authentication, and real-time collaboration.",
    link: "https://github.com/amlanprateek7077/EDUWEB",
    demo: "https://eduweb-demo.com",
  },
  {
    title: "HR e-Leave Tracking Web Application integrating TOTP-based authentication.",
    description:
      "It allows employees to apply for and manage leaves digitally while enabling HR to monitor approvals efficiently. It integrates TOTP-based authentication for secure, time-sensitive login verification.",

    link: "https://github.com/amlanprateek7077/HR-LEAVE",
    demo: "https://hr-leave-pkev.onrender.com/",
  },
  {
    title: "ScanConnect- A QR Code System",
    description:
      "A QR code system generates scannable codes that store multiple user-provided links, allowing anyone who scans the code to quickly access those URLs on their device. It acts as a centralized, easy-to-use gateway for sharing multiple resources instantly.",
    link: "https://github.com/amlanprateek7077/QR-CODE",
    demo: "https://-demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "Weather forecast app with live API integration and location-based search.",
    link: "https://github.com/amlan/weather-dashboard",
    demo: "https://weather-demo.com",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app with task lists, deadlines, and progress tracking.",
    link: "https://github.com/amlan/task-manager",
    demo: "https://task-demo.com",
  },
  {
    title: "E-commerce Store",
    description:
      "React + Stripe powered online store with product filtering and checkout flow.",
    link: "https://github.com/amlan/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {proj.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={proj.demo}
                target="_blank"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href={proj.link}
                target="_blank"
                className="px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
