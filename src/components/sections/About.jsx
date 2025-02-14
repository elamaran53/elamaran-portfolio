import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "React Js",
    "Git",
  ];

  const backendSkills = ["Java", "Oracle SQL", "GitHub", "Vite", "Vs Code", "JDBC"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <p className="text-gray-300 mb-6">
              Passionate Frontend developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
               transition border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
               transition border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4"> Others</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - H. H. The Rajah's College
                  (2021-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1
               hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
               ">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
        
                <div>
                  <h4 className="font-semibold pb-2">
                    {" "}
                    Frontend Internship at Read Automation (2025){" "}
                  </h4>
                  
                    <ul className="space-y-2">
                         <li>
                   * During this period, Actively contributed to various web development projects,
                     designing and developing responsive web applications.

                         </li>
                    </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
