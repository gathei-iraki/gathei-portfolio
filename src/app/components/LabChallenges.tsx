import { Shield, Target, Zap, Lock } from "lucide-react";

const LabChallenges = () => {
  const challenges = [
    {
      title: "Network Traffic Analysis",
      category: "Network Security",
      difficulty: "Intermediate",
      icon: <Shield className="h-6 w-6" />,
      problem: "Exploring the principles of network traffic analysis using Wireshark and TCP dump",
      approach: [
        "Using Tcpdump for intercepting Network Traffic.",
        "Interrogating Network Traffic With Capture and Display Filters",
        "Using Wireshark for intercepting and analyzing Network Traffic.",
      ],
      tools: ["Tcpdump", "Wireshark"],
      image: "https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D",
      keyLessons: [
        " Traffic patterns analysis.",
        "Anomaly detection."
      ],
      outcome: "Successfully carrying out real packet captures and applying filters in Wireshark and tcpdump, gained practical insights into traffic patterns, anomaly detection, and the layered structure ofnetwork communications."},
    {
      title: "Web Requests Lab",
      category: "Network Security",
      difficulty: "Advanced",
      icon: <Target className="h-6 w-6" />,
      problem: "Exploration of HTTP web requests, emphasizing the GET and POST methods",
      approach: [
        "Exploring HTTP GET Requests using cURL",
        "Using Browser Tools to analyze HTTP Requests and Responses",
        "Exploring HTTP GET Requests using Browser Dev tools"
      ],
      tools: ["cURL", "Browser Dev tools"],
      image: "https://images.unsplash.com/photo-1746292183209-682c89231b21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHR0cHxlbnwwfHwwfHx8MA%3D%3D",
      keyLessons: [
        "HTTP request structures",
        "HTTP session management",
        "Data Transimission Protocols"
      ],
      outcome: "Enhanced my understanding of how clients and servers interact over the web. By dissecting GET and POST methods using Browser DevTools and cURL, I gained valuable insights into request structures, data transmission, and session management."
    },
    {
      title: " DNS Protocols and Records",
      category: "Network",
      difficulty: "Beginner",
      icon: <Zap className="h-6 w-6" />,
      problem: "Exploring DNS concepts, including domain hierarchy, record types, and the DNS query process.",
      approach: [
        "Understanding Domain Hierarchy",
        "Understanding DNS Record Types",
        "Understanding DNS Query Process"
      ],
      tools: ["Browser dev tools"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      keyLessons: [
        "Domain Hierarchy",
        "DNS Record Types",
        "DNS Query Process"
      ],
      outcome: "An understanding of the domain hierarchy and various DNS record types,how DNS queries are resolved in real-world scenarios."
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