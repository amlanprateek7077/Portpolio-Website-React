import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Amlan Satapathy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg md:text-2xl max-w-2xl"
      >
        A Fullstack Developer who builds modern web apps — passionate about scalable, interactive, and visually pleasing experiences.
      </motion.p>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Explore Projects
        </a>

<a href="/amlan.pdf" className="px-6 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
  View Resume
</a>
        <a href="https://github.com/amlanprateek7077" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors">
          <FaGithub className="text-xl" />
          GitHub
        </a>
      </div>
    </section>
  )
}
