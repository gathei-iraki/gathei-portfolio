import { Globe, Users, Lightbulb, Trophy } from "lucide-react";

const Impact = () => {
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
    },
    {
      title: "Algorand Blockchain Hackathon (2024)",
      organization: "Algorand Developer Community",
      icon: <Trophy className="h-6 w-6" />,
      focus: "Blockchain & Decentralized Applications",
      description:
        "Part of the team that built *Bariki*, a decentralized fundraising platform using Algorand blockchain to enable secure and transparent donations.",
      contributions: [
        "Collaborated on designing the platform’s user flow and functionality",
        "Helped integrate blockchain-based transaction logic",
        "Worked in a fast-paced hackathon environment to deliver a working prototype",
      ],
      skills: ["Blockchain", "Team Collaboration", "Rapid Prototyping", "Web3"],
      outcome:
        "Delivered a functional decentralized fundraising prototype promoting transparency and trust in donations.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fellowships, Hackathons & National Impact
          </h2>
          <p className="text-gray-600 text-lg">
            Leadership, innovation, and contributions beyond traditional software roles
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.organization}</p>
                      <p className="text-sm text-gray-500">{exp.focus}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Contributions</h4>
                    <ul className="space-y-2">
                      {exp.contributions.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-700 text-sm">
                          <span className="text-blue-600">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between bg-gray-50">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
