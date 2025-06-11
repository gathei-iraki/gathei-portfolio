import { Shield, Target, Zap, Lock } from "lucide-react";

const LabChallenges = () => {
  const challenges = [
    {
      title: "SQL Injection Vulnerability Assessment",
      category: "Web Security",
      difficulty: "Intermediate",
      icon: <Shield className="h-6 w-6" />,
      problem: "Identify and exploit SQL injection vulnerabilities in a web application login system to gain unauthorized access to user data.",
      approach: [
        "Analyzed the login form for potential injection points",
        "Used Burp Suite to intercept and modify HTTP requests",
        "Tested various SQL injection payloads",
        "Exploited union-based injection to extract database information"
      ],
      tools: ["Burp Suite", "SQLMap", "MySQL", "Python"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      keyLessons: [
        "Importance of parameterized queries",
        "Input validation and sanitization",
        "Principle of least privilege for database access",
        "Real-world impact of SQL injection attacks"
      ],
      outcome: "Successfully identified 3 injection points and extracted sensitive user data, demonstrating the critical need for secure coding practices."
    },
    {
      title: "Network Penetration Testing Lab",
      category: "Network Security",
      difficulty: "Advanced",
      icon: <Target className="h-6 w-6" />,
      problem: "Conduct a comprehensive penetration test on a simulated corporate network to identify vulnerabilities and potential attack vectors.",
      approach: [
        "Performed network reconnaissance using Nmap",
        "Identified open ports and running services",
        "Exploited SMB vulnerabilities for lateral movement",
        "Escalated privileges using kernel exploits"
      ],
      tools: ["Nmap", "Metasploit", "Wireshark", "John the Ripper", "Hydra"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      keyLessons: [
        "Methodology of penetration testing",
        "Importance of network segmentation",
        "Regular security updates and patch management",
        "Multi-layered security approach"
      ],
      outcome: "Achieved full domain compromise within 4 hours, documenting 15+ vulnerabilities and providing remediation recommendations."
    },
    {
      title: "Reverse Engineering Malware Sample",
      category: "Malware Analysis",
      difficulty: "Expert",
      icon: <Zap className="h-6 w-6" />,
      problem: "Analyze a suspected malware binary to understand its functionality, identify indicators of compromise, and develop detection signatures.",
      approach: [
        "Set up isolated analysis environment",
        "Performed static analysis using disassemblers",
        "Conducted dynamic analysis with debuggers",
        "Identified C2 communication patterns"
      ],
      tools: ["IDA Pro", "x64dbg", "Process Monitor", "Wireshark", "YARA"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      keyLessons: [
        "Malware analysis techniques and tools",
        "Understanding of assembly language",
        "Network traffic analysis for C2 detection",
        "Creating effective YARA rules"
      ],
      outcome: "Identified trojan functionality, extracted 5 IoCs, and created detection rules that were integrated into the SOC environment."
    },
    {
      title: "Cryptographic Protocol Implementation",
      category: "Cryptography",
      difficulty: "Intermediate",
      icon: <Lock className="h-6 w-6" />,
      problem: "Implement a secure communication protocol using RSA encryption and digital signatures, then test for potential vulnerabilities.",
      approach: [
        "Designed custom encryption protocol",
        "Implemented RSA key generation and management",
        "Added digital signature verification",
        "Tested against known cryptographic attacks"
      ],
      tools: ["Python", "OpenSSL", "Cryptography Library", "SageMath"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      keyLessons: [
        "Proper implementation of cryptographic algorithms",
        "Key management best practices",
        "Common cryptographic vulnerabilities",
        "Importance of using established libraries"
      ],
      outcome: "Successfully created a secure protocol that withstood standard attacks, with detailed documentation of implementation choices."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-orange-100 text-orange-700";
      case "Expert": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Lab Challenges</h2>
          <p className="text-xl text-gray-600">Cybersecurity challenges and practical learning experiences</p>
        </div>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      {challenge.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{challenge.title}</h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {challenge.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Problem Statement</h4>
                    <p className="text-gray-700 leading-relaxed">{challenge.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Approach</h4>
                    <ol className="space-y-2">
                      {challenge.approach.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {challenge.tools.map((tool, i) => (
                        <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Lessons Learned</h4>
                    <ul className="space-y-2">
                      {challenge.keyLessons.map((lesson, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{challenge.outcome}</p>
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

export default LabChallenges;