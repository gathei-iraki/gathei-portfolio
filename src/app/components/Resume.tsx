import { GraduationCap, Briefcase, Award, Code, Download } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2020-2024",
      gpa: "3.8/4.0",
      relevant: ["Data Structures", "Algorithms", "Cybersecurity", "Software Engineering"]
    },
    {
      degree: "Associate Degree in Information Technology",
      school: "Community College",
      year: "2018-2020",
      gpa: "3.9/4.0",
      relevant: ["Network Security", "Database Management", "Web Development"]
    }
  ];

  const experience = [
    {
      title: "Junior Software Developer",
      company: "TechCorp Solutions",
      period: "June 2023 - Present",
      responsibilities: [
        "Developed and maintained web applications using React, Node.js, and MongoDB",
        "Implemented security protocols and conducted vulnerability assessments",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Participated in code reviews and maintained coding standards"
      ]
    },
    {
      title: "IT Support Intern",
      company: "Digital Innovations Inc.",
      period: "Summer 2022",
      responsibilities: [
        "Provided technical support for 200+ employees",
        "Assisted in network maintenance and security updates",
        "Documented IT procedures and created user guides",
        "Helped implement new security policies"
      ]
    }
  ];

  const certifications = [
    "CompTIA Security+ (2023)",
    "AWS Cloud Practitioner (2023)",
    "Google IT Support Professional Certificate (2022)",
    "Certified Ethical Hacker (CEH) - In Progress"
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++", "SQL"],
    "Web Technologies": ["React", "Node.js", "Express", "HTML5", "CSS3", "MongoDB"],
    "Security Tools": ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"],
    "Cloud & DevOps": ["AWS", "Docker", "Git", "Jenkins", "Linux"],
    "Other": ["Agile/Scrum", "Project Management", "Technical Writing"]
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 mb-8">My academic background, experience, and skills</p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-lg text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-gray-600">{edu.year} | GPA: {edu.gpa}</p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-6">
                <Award className="h-6 w-6 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-6">
                <Briefcase className="h-6 w-6 text-blue-600" />
                Work Experience
              </h3>
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-lg text-gray-900">{exp.title}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-6">
                <Code className="h-6 w-6 text-blue-600" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <span key={i} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
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
      </div>
    </section>
  );
};

export default Resume;