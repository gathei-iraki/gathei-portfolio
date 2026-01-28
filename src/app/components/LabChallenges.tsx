"use client";
import { Globe, Users, Lightbulb, Trophy, Target, Award, TrendingUp, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Impact = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: "Kenya National AI Strategy (2025–2030)",
      organization: "National Multi-Stakeholder Working Group",
      icon: <Globe className="h-6 w-6" />,
      focus: "Artificial Intelligence Policy & Strategy",
      description:
        "Contributed to the development of Kenya’s National AI Strategy, shaping policy recommendations around responsible AI adoption, governance, infrastructure, and innovation.",
      contributions: [
        "Supported strategy discussions on AI governance and ethical adoption",
        "Collaborated with experts across government, academia, and industry",
        "Helped shape frameworks for AI innovation and national capacity building",
      ],
      skills: ["AI Policy", "Research", "Stakeholder Collaboration", "Digital Strategy"],
      outcome:
        "Helped influence a national framework guiding Kenya’s AI innovation, governance, and responsible technology adoption.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      date: "2025",
      level: "National"
    },
    {
      title: "Jim Leech Mastercard Foundation Fellowship (2025)",
      organization: "Mastercard Foundation",
      icon: <Users className="h-6 w-6" />,
      focus: "Entrepreneurship & Innovation",
      description:
        "Completed an intensive leadership and entrepreneurship fellowship focused on business development, innovation, and building sustainable ventures.",
      contributions: [
        "Worked with mentors and industry experts on venture-building skills",
        "Developed leadership and problem-solving capabilities",
        "Collaborated with a global network of young innovators",
      ],
      skills: ["Leadership", "Entrepreneurship", "Innovation", "Business Development"],
      outcome:
        "Strengthened entrepreneurial thinking and leadership skills to drive impactful technology solutions.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop",
      date: "2025",
      level: "Global"
    },
    {
      title: "United Nations Millennium Fellowship (2022)",
      organization: "United Nations Academic Impact",
      icon: <Lightbulb className="h-6 w-6" />,
      focus: "Social Impact & Digital Wellbeing",
      description:
        "Selected as a UN Millennium Fellow and designed a blueprint for *Speak Out*, a digital platform connecting individuals with mental health professionals in underserved communities.",
      contributions: [
        "Designed a digital solution addressing mental health accessibility",
        "Aligned project goals with UN Sustainable Development Goals (SDGs)",
        "Worked in a global cohort of student leaders driving social change",
      ],
      skills: ["Social Innovation", "Product Design", "Community Impact"],
      outcome:
        "Developed a scalable concept for improving access to mental health support through technology.",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&h=300&fit=crop",
      date: "2022",
      level: "International"
    },
    {
      title: "Algorand Blockchain Hackathon (2024)",
      organization: "Algorand Developer Community",
      icon: <Trophy className="h-6 w-6" />,
      focus: "Blockchain & Decentralized Applications",
      description:
        "Part of the team that built *Bariki*, a decentralized fundraising platform using Algorand blockchain to enable secure and transparent donations.",
      contributions: [
        "Collaborated on designing the platform's user flow and functionality",
        "Helped integrate blockchain-based transaction logic",
        "Worked in a fast-paced hackathon environment to deliver a working prototype",
      ],
      skills: ["Blockchain", "Team Collaboration", "Rapid Prototyping", "Web3"],
      outcome:
        "Delivered a functional decentralized fundraising prototype promoting transparency and trust in donations.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop",
      date: "2024",
      level: "Community"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleCards(prev => {
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

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "National": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Global": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "International": return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Community": return "bg-gradient-to-r from-orange-500 to-amber-500";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getLevelTextColor = (level: string) => {
    switch (level) {
      case "National": return "text-blue-600";
      case "Global": return "text-purple-600";
      case "International": return "text-green-600";
      case "Community": return "text-orange-600";
      default: return "text-gray-600";
    }
  };

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
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
            Fellowships & Strategic Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation through leadership roles, national policy contributions, and social impact projects
          </p>
        </div>

        {/* Timeline Connector (Desktop) */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300 rounded-full"></div>
          <div className="flex justify-between absolute left-1/2 transform -translate-x-1/2 w-full top-1/2">
            {[1, 2, 3, 4].map((dot, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-white border-4 border-blue-500"></div>
            ))}
          </div>
        </div>

        {/* Impact Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="group"
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`
              }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Side - Content */}
                  <div className="lg:col-span-3 p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg ${getLevelTextColor(exp.level)}`}>
                          {exp.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getLevelColor(exp.level)} text-white`}>
                              {exp.level}
                            </span>
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {exp.date}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">{exp.focus}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-blue-200 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
                      {exp.description}
                    </p>

                    {/* Contributions */}
                    <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                        <Award size={18} className="text-blue-600" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {exp.contributions.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 items-start animate-slide-in"
                            style={{
                              animation: `slideInLeft 0.4s ease-out ${i * 0.1}s forwards`,
                              opacity: 0,
                              transform: 'translateX(-10px)'
                            }}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Target size={16} className="text-blue-600" />
                        Skills Gained
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:scale-105 transition-transform animate-fade-in"
                            style={{
                              animation: `fadeIn 0.3s ease-out ${i * 0.05}s forwards`,
                              opacity: 0
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visual & Impact */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white border-l border-gray-100 p-8 flex flex-col justify-between">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl mb-6 group-hover:shadow-lg transition-shadow">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Impact Card */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                          <TrendingUp size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">Impact & Outcome</h4>
                      </div>
                      <div className="relative">
                        <p className="text-gray-700 leading-relaxed text-sm pl-4 border-l-2 border-gradient-to-b from-blue-400 to-purple-400">
                          {exp.outcome}
                        </p>
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                      </div>
                      
                      {/* Stats */}
                      <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {exp.contributions.length}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Key Contributions</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {exp.skills.length}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Skills Developed</p>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div
          className="mt-20 pt-8 border-t border-gray-200 animate-fade-in"
          style={{
            animation: "fadeIn 0.6s ease-out 0.3s forwards",
            opacity: 0
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4</div>
              <p className="text-sm text-gray-600 mt-2">Major Initiatives</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</div>
              <p className="text-sm text-gray-600 mt-2">International Fellowships</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
              <p className="text-sm text-gray-600 mt-2">Skills Developed</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">National</div>
              <p className="text-sm text-gray-600 mt-2">Policy Contribution</p>
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
        
        .border-gradient-to-b {
          border-image: linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899) 1;
        }
      `}</style>
    </section>
  );
};

export default Impact;