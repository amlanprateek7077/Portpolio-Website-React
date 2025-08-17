import profilePic from "/01.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Photo */}
        <img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 shadow-lg"
        />

        {/* Text Content */}
        <div className="text-center md:text-left text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            🎓 Education:<br />
            B.Tech (CSE) — Parala Maharaja Engineering College, Berhampur — 2026<br />
            12th (Science, CHSE) — Bhubaneswar College Of Computer Science and Technology, Bhubaneswar — 2022<br />
            10th (BSE) — Jenapur Govt. Highschool — 2020
          </p>

          <p>
            My Details:<br />
            Name: Amlan Satapathy<br />
            Email: amlansatapathy2005@gmail.com<br />
            Phone: +91 8249744319<br />
            DOB: 15 Mar 2005<br />
            Address: Jenapur, Jajpur, Odisha, India<br />
            Languages: English, Hindi, Odia, Spanish (basic)
            <br /><br />
           
            "I believe in writing clean, maintainable code that solves real problems and creates meaningful user experiences."

              — My Development Philosophy <br /><br />
            
               
          </p>
        </div>
      </div>
    </section>
  );
}
