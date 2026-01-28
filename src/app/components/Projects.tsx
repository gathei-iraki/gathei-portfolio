"use client";
import { ExternalLink, Github, Eye, Sparkles, Zap, Globe, Cpu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Advateck Engineering Website",
      description:
        "Developed a modern corporate website for Advateck, showcasing their capabilities, products, and makes it easy for clients to connect.",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      github: null,
      live: "https://www.advateck.co.ke/",
      features: [
        "Company profile highlighting Products and services",
        "Product and service showcase",
        "Clear communication channels for client inquiries and project requests",
      ],
      category: "Corporate",
      status: "Live"
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
      category: "FinTech",
      status: "Live"
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
      category: "Blockchain",
      status: "Hackathon"
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
      category: "AI/ML",
      status: "Open Source"
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
      category: "Enterprise",
      status: "Private"
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
      category: "IoT",
      status: "Hardware"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800 border-green-200";
      case "Open Source": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Hackathon": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Private": return "bg-gray-100 text-gray-800 border-gray-200";
      case "Hardware": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Corporate": return <Globe size={16} />;
      case "FinTech": return <Sparkles size={16} />;
      case "Blockchain": return <Cpu size={16} />;
      case "AI/ML": return <Zap size={16} />;
      case "Enterprise": return <Sparkles size={16} />;
      case "IoT": return <Zap size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 animate-fade-in"
          style={{
            animation: "fadeInUp 0.6s ease-out forwards",
            opacity: 0
          }}
        >
          
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Projects & Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of professional and personal projects showcasing expertise across web development, blockchain, AI, and embedded systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="group"
              style={{
                opacity: visibleProjects[index] ? 1 : 0,
                transform: visibleProjects[index] ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:scale-[1.02] group-hover:border-blue-200">
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm font-medium text-gray-700">{project.category}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
                        aria-label="View Live Project"
                      >
                        <Eye className="h-5 w-5 text-gray-900" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="h-5 w-5 text-gray-900" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
                        aria-label="Open External Link"
                      >
                        <ExternalLink className="h-5 w-5 text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex gap-3 animate-slide-in"
                          style={{
                            animation: `slideInLeft 0.3s ease-out ${i * 0.1}s forwards`,
                            opacity: 0,
                            transform: 'translateX(-10px)'
                          }}
                        >
                          <span className="text-blue-500 flex-shrink-0 mt-1">▸</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 hover:scale-105 transition-transform animate-fade-in"
                          style={{
                            animation: `fadeIn 0.3s ease-out ${i * 0.05}s forwards`,
                            opacity: 0
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Eye size={16} />
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="flex-1 text-center text-gray-500 text-sm px-4 py-2 rounded-lg bg-gray-50">
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div
          className="mt-16 pt-8 border-t border-gray-200 animate-fade-in"
          style={{
            animation: "fadeIn 0.6s ease-out 0.3s forwards",
            opacity: 0
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6</div>
              <p className="text-sm text-gray-600 mt-2">Total Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</div>
              <p className="text-sm text-gray-600 mt-2">Live Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</div>
              <p className="text-sm text-gray-600 mt-2">Open Source</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
              <p className="text-sm text-gray-600 mt-2">Technologies</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          opacity: 0;
        }
        
        .animate-slide-in {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Projects;