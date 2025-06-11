import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mula Social Investments",
      description: "Designed and implemented a digital wallet solution tailored to the needs of Mula Social Investments, enabling individuals and businesses to manage finances, grow savings, and reinvest effectively.",
      technologies: ["React", "Node.js", "MongoDB", "Daraja API", "JWT", "bcrypt"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://www.mulagroups.com/",
      live: "https://www.mulagroups.com/",
      features: [
        "Secure payment processing with Mpesa",
        "Financial tracking and reporting functions",
        "Enhancing operational efficiency and financial management",
        "Encrypted user data storage"
      ]
    },
    {
      title: "Bariki Fundraising Platform",
      description: "A decentralized fundraising platform that utilizes Algorand crypto currency for secure, transparent transactions. ",
      technologies: ["Python", "Powershell", "JavaScript", "Algorand Blockchain"],
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/SenZmaKi/Bariki",
      live: null,
      features: [
        "Donating and managing funds efficiently",
        "leveraging block chain technology to ensure trust and accountability in fundraising processes"
       
      ]
    },
    {
      title: "Music-Interactive LED Strip with Arduino",
      description: "An LED strip that synchronizes light patterns with music using an Arduino microcontroller.",
      technologies: ["React", "Service Workers", "IndexedDB", "Socket.io", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJkdWlub3xlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/gathei-iraki/music-reactive-LED-strip-with-arduino",
      live: "https://github.com/gathei-iraki/music-reactive-LED-strip-with-arduino",
      features: [
        "Creating dynamic lighting effects that respond to audio input."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my technical skills and creativity</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;