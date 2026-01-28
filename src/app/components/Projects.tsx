import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
   {
  title: "Advateck Engineering Website",
  description:
    " Developed a modern corporate website for Advateck, showcasing their capabilities, products, and makes it easy for clients to connect.",
  technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
  github: null,
  live: "https://www.advateck.co.ke/",
  features: [
    "Company profile highlighting Products and services",
    "Product and service showcase .",
    "Clear communication channels for client inquiries and project requests",
  
  ],
},

    {
      title: "Digital Wallet – Mula Social Investments",
      description:
        "Built a digital wallet platform enabling users to manage funds, track financial activity, and support savings and reinvestment initiatives.",
      technologies: ["React", "Node.js", "REST APIs", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: null,
      live: "https://www.mulagroups.com/",
      features: [
        "Wallet management and financial tracking",
        "Digital payments integration",
        "User-friendly financial dashboard",
        "Improved operational efficiency for users",
      ],
    },
    {
      title: "Bariki Decentralized Fundraising Platform",
      description:
        "A blockchain-based fundraising platform built during the Algorand Hackathon to enable secure and transparent digital donations.",
      technologies: ["JavaScript", "Algorand Blockchain", "Smart Contracts"],
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&h=300&fit=crop",
      github: "https://github.com/SenZmaKi/Bariki",
      live: null,
      features: [
        "Transparent and traceable donations",
        "Blockchain-secured transactions",
        "Decentralized fundraising model",
      ],
    },
    {
      title: "Uadilifu Plagiarism Detector",
      description:
        "A document similarity detection tool using TF-IDF algorithms to identify potential plagiarism across text sources.",
      technologies: ["Python", "TF-IDF", "Natural Language Processing"],
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop",
      github: "https://github.com/gathei-iraki/PLagiarism-Detector-using-TF-IDF",
      live: null,
      features: [
        "Text similarity analysis",
        "TF-IDF based document comparison",
        "Highlights potential plagiarism instances",
      ],
    },
    {
      title: "POS System – Buchana Industries",
      description:
        "Custom-built Point-of-Sale system for sales tracking, inventory management, and automated reporting.",
      technologies: ["Microsoft Access", "Database Design", "SQL"],
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=300&fit=crop",
      github: null,
      live: null,
      features: [
        "Sales and inventory tracking",
        "Automated reporting system",
        "Custom database-driven workflows",
      ],
    },
    {
      title: "Music-Reactive LED Strip (Arduino)",
      description:
        "An embedded systems project where LED lighting effects synchronize with live music input using signal processing.",
      technologies: ["Arduino", "C++", "Signal Processing"],
      image:
        "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=500&h=300&fit=crop",
      github: "https://github.com/gathei-iraki/music-reactive-LED-strip-with-arduino",
      live: null,
      features: [
        "Audio-reactive lighting effects",
        "Microcontroller-based programming",
        "Real-time signal processing",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg">
            A selection of work showcasing my expertise in web, cloud, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:scale-110 transition"
                    >
                      <Eye className="h-5 w-5 text-gray-900" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:scale-110 transition"
                    >
                      <Github className="h-5 w-5 text-gray-900" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:scale-110 transition"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
