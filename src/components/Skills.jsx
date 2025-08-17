import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss,  } from "react-icons/si";
import { FaPython, FaLinux, FaAws } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500 text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
  { name: "Linux", icon: <FaLinux className="text-gray-500 text-3xl" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
   { name: "Project Management", icon: <MdOutlineManageAccounts className="text-purple-500 text-3xl" /> },
  { name: "Content Editing", icon: <FaEdit className="text-yellow-500 text-3xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold mb-12">⚡ Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-6 
                       bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-300"
          >
            {s.icon}
            <p className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-200">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
