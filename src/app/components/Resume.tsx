"use client";
import { useState, useEffect, useRef } from "react";
import { GraduationCap, Briefcase, Award, Code, Download, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <div ref={ref} className="text-center">
      <motion.p 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        {count}+
      </motion.p>
      <p className="text-sm text-gray-600 mt-2 font-medium">{label}</p>
    </div>
  );
};

const Resume = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');

  const education = [
    {
      degree: "BSc Computer Science",
      school: "University of Nairobi",
      year: "2020 – 2025",
      gpa: "First Class Honors",
      icon: "🎓"
    },
    {
      degree: "Web Development Certificate",
      school: "Ubunifu College",
      year: "2023",
      achievements: ["Top 5% of cohort"],
      icon: "🚀"
    },
    {
      degree: "Software Development Certificate",
      school: "Moringa School",
      year: "2020",
      achievements: ["Graduated with distinction"],
      icon: "💻"
    },
  ];

  const experience = [
    {
      title: "Frontend Web Developer",
      company: "RentFlow360 (USA, Remote)",
      period: "Oct 2025 – Nov 2025",
      responsibilities: [
        "Designed a modern property management system with a responsive UI.",
        "Integrated RESTful APIs for real-time functionality.",
        "Built a back-office admin interface to streamline workflows.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      icon: "🏢"
    },
    {
      title: "Frontend Web Developer",
      company: "Truride — Nairobi, Kenya",
      period: "May 2025 – Aug 2025",
      responsibilities: [
        "Redesigned the company website with a modern mobile-first interface.",
        "Integrated APIs and dynamic features.",
        "Built internal tools to optimize operations.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      icon: "🚗"
    },
    {
      title: "Frontend Web Developer",
      company: "Bafunde — Nairobi, Kenya",
      period: "Nov 2024 – May 2025",
      responsibilities: [
        "Developed new ICPAK & MULA websites with improved performance.",
        "Enhanced UI/UX across devices.",
        "Supported deployment of client solutions.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      icon: "💼"
    },
    {
      title: "Business Applications Engineer",
      company: "Computer Revolution Africa Group",
      period: "Sep 2020 – Aug 2022",
      responsibilities: [
        "Automated workflows using Microsoft Power Platform.",
        "Managed Microsoft 365 environments.",
        "Deployed Azure cloud infrastructure for clients.",
      ],
      technologies: ["Power Platform", "Azure", "Microsoft 365"],
      icon: "⚡"
    },
  ];

  const certifications = [
    { 
      name: "CIPIT Data Protection Certificate", 
      issuer: "Strathmore University",
      year: "2025",
      credentialId: "DP-2025-001"
    },
    { 
      name: "Cloud & Network Security Certificate", 
      issuer: "Cybershujaa",
      year: "2025",
      credentialId: "CNS-2025-042"
    },
    { 
      name: "Microsoft Power Platform Functional Consultant", 
      issuer: "Microsoft",
      year: "2024",
      credentialId: "PL-200"
    },
  ];

  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Node.js"],
    "Frontend": ["React", "Next.js", "Tailwind CSS"],
    "Backend": [ "Express.js", "REST APIs"],
    "Cloud": ["AWS", "Azure"],
    "Power Platform": ["Power Apps", "Power Automate", "Power BI"],
    "Databases": ["PostgreSQL", "MySQL"],
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase size={16} />
            Professional Journey
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Resume & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            A comprehensive overview of my professional experience, education, and technical capabilities
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <Counter end={3} label="Years Experience" />
            </div>
           
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <Counter end={5} label="Certifications" />
            </div>
          </div>

        </motion.div>

        {/* Education & Experience Tabs for Mobile */}
        <div className="lg:hidden mb-8">
          <div className="flex gap-2 p-1 bg-gray-100 rounded-xl w-fit mx-auto">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'education' 
                  ? 'bg-white shadow-lg text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'experience' 
                  ? 'bg-white shadow-lg text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`lg:block ${activeTab === 'experience' ? 'hidden lg:block' : 'block'}`}
          >
            <div className="sticky top-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-white border-4 border-blue-50"></div>
                    <div className="ml-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{edu.degree}</h4>
                          <p className="text-blue-600 font-semibold">{edu.school}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {edu.year}
                        </span>
                       
                      </div>
                      
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`lg:block ${activeTab === 'education' ? 'hidden lg:block' : 'block'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full text-left p-6 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{exp.title}</h4>
                          <p className="text-blue-600 font-semibold mb-1">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.period}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {openIndex === i ? (
                            <ChevronUp size={20} className="text-gray-400" />
                          ) : (
                            <ChevronDown size={20} className="text-gray-400" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, j) => (
                          <span 
                            key={j} 
                            className="text-xs font-medium bg-gradient-to-r from-purple-50 to-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-purple-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                            <ul className="space-y-3">
                              {exp.responsibilities.map((resp, j) => (
                                <motion.li 
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.1 }}
                                  className="text-gray-700 flex gap-3 items-start"
                                >
                                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications & Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Award className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-50 rounded-lg group-hover:scale-110 transition-transform">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                            <Award size={16} className="text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                          <p className="text-gray-600 text-sm mt-1">{cert.issuer} • {cert.year}</p>
                          {cert.credentialId && (
                            <p className="text-xs text-gray-500 mt-2 font-mono">ID: {cert.credentialId}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100  rounded-xl">
                  <Code className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, list], i) => (
                  <motion.div 
                    key={category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 h-full">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {list.map((skill, j) => (
                          <motion.span 
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.05 }}
                            viewport={{ once: true }}
                            className="text-sm bg-gradient-to-r from-orange-50 to-amber-50 text-gray-600 px-3 py-2 rounded-lg font-medium border border-orange-100 hover:scale-105 transition-transform"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;