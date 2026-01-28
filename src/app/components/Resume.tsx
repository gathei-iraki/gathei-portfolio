"use client";
import { useState, useEffect } from "react";
import { GraduationCap, Briefcase, Award, Code, Download } from "lucide-react";

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-blue-600">{count}+</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
};

const Resume = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const education = [
    {
      degree: "BSc Computer Science",
      school: "University of Nairobi",
      year: "2020 – 2025",
    },
    {
      degree: "Web Development Certificate",
      school: "Ubunifu College",
      year: "2023",
    },
    {
      degree: "Software Development Certificate",
      school: "Moringa School",
      year: "2020",
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
    },
  ];

  const certifications = [
    "CIPIT Data Protection Certificate – Strathmore University (2025)",
    "Cloud & Network Security Certificate – Cybershujaa (2025)",
    "Microsoft Power Platform Functional Consultant (PL-200)",
  ];

  const skills = {
    Languages: ["JavaScript", "TypeScript", "Node.js"],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Backend: ["Django", "REST APIs"],
    Cloud: ["AWS", "Azure"],
    "Power Platform": ["Power Apps", "Power Automate", "Power BI"],
    Databases: ["PostgreSQL", "MySQL"],
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
      <p className="text-gray-600 mb-8">Experience, education & technical expertise</p>

      <div className="flex justify-center gap-10 mb-10">
        <Counter end={5} label="Years Experience" />
        <Counter end={15} label="Projects Built" />
        <Counter end={6} label="Certifications" />
      </div>

      <a
        href="/Silvia-Gathei-CV.pdf"
        download
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        <Download size={18} /> Download CV
      </a>
    </div>

    {/* ROW 1 — EDUCATION & EXPERIENCE */}
    <div className="grid lg:grid-cols-2 gap-16 mb-20">

      {/* Education */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
          <GraduationCap className="text-blue-600" /> Education
        </h3>
        <div className="space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
              <p className="text-blue-600 font-medium">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
          <Briefcase className="text-blue-600" /> Work Experience
        </h3>
        <div className="space-y-5">
          {experience.map((exp, i) => (
            <div key={i} className="border border-gray-100 rounded-xl shadow-sm bg-white overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 hover:bg-gray-50 transition"
              >
                <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="text-gray-700 text-sm flex gap-2">
                        <span className="text-blue-600">•</span> {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ROW 2 — CERTIFICATIONS & SKILLS */}
    <div className="grid lg:grid-cols-2 gap-16">

      {/* Certifications */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
          <Award className="text-blue-600" /> Certifications
        </h3>
        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
              <span className="text-gray-700 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
          <Code className="text-blue-600" /> Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {list.map((skill, i) => (
                  <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Resume;
