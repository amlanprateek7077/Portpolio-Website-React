export default function Navbar({ dark, setDark }) {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Amlan Satapathy
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 text-sm text-gray-800 dark:text-gray-200"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="px-2 py-1 rounded-full border border-gray-400 dark:border-gray-600 text-sm text-gray-800 dark:text-gray-200"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="text-gray-800 dark:text-gray-200">☰</button>
        </div>
      </div>
    </nav>
  );
}
