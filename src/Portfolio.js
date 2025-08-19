import { 
  Github, Linkedin, Mail, Cpu, Database, Cloud, Box, Briefcase, GraduationCap 
} from "lucide-react";

// Simple card wrapper
function Card({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6">
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Aayushi Sadani</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#aboutme" className="hover:text-indigo-600">About Me</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#achievements" className="hover:text-indigo-600">Achievements</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4 shadow">Open to Work</span>
        <img src="/hello.gif" alt="Aayushi Sadani" className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-white object-cover" />
        <h1 className="text-5xl font-extrabold mb-2">Aayushi Sadani</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">Looking for SDE / Full-Stack Developer Opportunities</p>
        <div className="flex gap-6 mb-6">
          <a href="mailto:asadani@uci.edu" className="hover:text-indigo-600"><Mail className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/aayushi-sadani" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><Linkedin className="w-6 h-6" /></a>
          <a href="https://github.com/ayushi-Sadani" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600"><Github className="w-6 h-6" /></a>
        </div>
        <a href="/resume.pdf" download className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">Download Resume</a>
      </section>

      {/* About Me */}
      <section id="aboutme" className="py-20 px-6 max-w-4xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          I'm an incoming Master's student in Computer Science at the University of California, Irvine, building on my strong foundation from Vellore Institute of Technology where I earned my B.Tech in Computer Science. My passion lies in designing scalable, reliable, and user-focused software systems that bridge engineering with real-world impact.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Professionally, I bring 1.5+ years of experience as a Software Engineer at Bajaj Finserv Direct, where I worked on:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
          <li>Developing high-scale microservices with Spring Boot & PostgreSQL</li>
          <li>Optimizing system performance to improve throughput and user experience</li>
          <li>Implementing event-driven communication using AWS SNS/SQS</li>
          <li>Integrating frontend & backend for seamless platforms serving thousands of users</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          My academic and technical focus includes:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
          <li>Scalable backend systems and REST APIs using <b>Java & Spring Boot</b></li>
          <li>Cloud-native technologies: <b>AWS, Docker, Kubernetes</b></li>
          <li>Database design & optimization: <b>PostgreSQL, MySQL, MongoDB</b></li>
          <li>Modern web platforms and microservices architecture</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          When I’m not coding, you’ll find me exploring fitness routines, practicing yoga, or traveling — I believe the same discipline and curiosity that fuel my engineering journey also shape my personal growth.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* UCI */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold">University of California, Irvine</h3>
            </div>
            <p className="text-gray-600">Master of Science in Computer Science (Incoming)</p>
            <p className="text-sm text-gray-500 mb-3">September 2025 – Present</p>
            <p className="font-medium mb-2">Courses:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>SWE 240P – Data Structures (Lab)</li>
              <li>SWE 241P – Applied Data Structures & Algorithms (Lab)</li>
              <li>SWE 242P – Network Programming (Lab)</li>
              <li>SWE 244P – Concurrent Programming (Lab)</li>
              <li>SWE 262P – Programming Styles (Lecture)</li>
            </ul>
          </div>
          {/* VIT */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold">Vellore Institute of Technology</h3>
            </div>
            <p className="text-gray-600">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-sm text-gray-500 mb-3">July 2019 – May 2023</p>
            <p className="font-medium mb-2">Relevant Courses:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Web Development</li>
              <li>Cyber Security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div className="hover:scale-105 transition">
            <Cpu className="w-12 h-12 mx-auto text-indigo-600" />
            <h3 className="mt-3 font-semibold">Programming</h3>
            <p className="text-gray-600 text-sm">Java, Python, C++, JavaScript, SQL</p>
          </div>
          <div className="hover:scale-105 transition">
            <Database className="w-12 h-12 mx-auto text-indigo-600" />
            <h3 className="mt-3 font-semibold">Databases</h3>
            <p className="text-gray-600 text-sm">MySQL, PostgreSQL, MongoDB, Redis</p>
          </div>
          <div className="hover:scale-105 transition">
            <Cloud className="w-12 h-12 mx-auto text-indigo-600" />
            <h3 className="mt-3 font-semibold">Cloud & Tools</h3>
            <p className="text-gray-600 text-sm">AWS, Docker, Kubernetes, Git, Jira</p>
          </div>
          <div className="hover:scale-105 transition">
            <Box className="w-12 h-12 mx-auto text-indigo-600" />
            <h3 className="mt-3 font-semibold">Frameworks</h3>
            <p className="text-gray-600 text-sm">Spring Boot, Hibernate, REST APIs</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-indigo-600 w-6 h-6" />
              <h3 className="text-xl font-semibold">Software Engineer-II — Bajaj Finserv Direct Limited</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">July 2023 – Present | Pune, India</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Built scalable Spring Boot microservices, improving throughput by 40%.</li>
              <li>Redesigned workflows, improving UX and increasing loan completion rate by 30%.</li>
              <li>Cut API latency by 50% using Redis caching & async handling.</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-indigo-600 w-6 h-6" />
              <h3 className="text-xl font-semibold">Software Engineer Intern — Bajaj Finserv Direct Limited</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Jan 2023 – June 2023 | Pune, India</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Integrated Elasticsearch for intelligent KYC matching, boosting accuracy by 30%.</li>
              <li>Reduced onboarding load time from 12s to 5s, enhancing UX.</li>
              <li>Implemented event-driven AWS SNS/SQS communication, improving resiliency by 45%.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Projects */}
     <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-gray-50"> 
     <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2> 
     <div className="grid md:grid-cols-3 gap-8"> 
     {/* Project 1 */} 
     <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"> 
     <img src="/CampusCraving.jpg" alt="Campus Cravings" className="w-full h-48 object-cover rounded-xl mb-4" /> 
     <h3 className="text-xl font-semibold mb-2">Campus Cravings </h3> 
     <p className="text-gray-700 mb-3"> 
     A full-stack food ordering platform built to streamline campus food delivery. Students can browse menus, place orders, and track deliveries in real time. </p> 
     <p className="text-sm text-gray-600 mb-2"><b>Tech Stack:</b> React, Node.js, Express, MongoDB</p> 
     <p className="text-sm text-gray-600 mb-4"> <b>Impact:</b> Reduced wait times by 40% and improved vendor order tracking efficiency for campus outlets. </p> 
     <div className="flex gap-4"> <a href="https://github.com/ayushi-Sadani" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a> </div> </div> 
     {/* Project 2 */} 
     <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"> 
        <img src="/hacker.webp" alt="Campus Cravings" className="w-full h-48 object-cover rounded-xl mb-4" /> 
        <h3 className="text-xl font-semibold">Keylogger</h3> 
        <p className="text-gray-700 mb-3"> A cybersecurity tool designed to detect and neutralize malicious keyloggers. Built as a research-driven project to raise awareness on Windows security vulnerabilities. </p> 
        <p className="text-sm text-gray-600 mb-2"><b>Tech Stack:</b> Python, Tkinter, Windows API</p> 
        <p className="text-sm text-gray-600 mb-4"> <b>Impact:</b> Identified and removed multiple stealth keyloggers in test environments, helping improve endpoint protection. </p> 
        <div className="flex gap-4"> <a href="https://github.com/ayushi-Sadani" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a> </div> </div> 
        {/* Project 3 */} <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"> 
            <img src="/Safety.jpg" alt="Campus Cravings" className="w-full h-48 object-cover rounded-xl mb-4" /> 
            <h3 className="text-xl font-semibold mb-2">Women’s Safety App </h3> 
            <p className="text-gray-700 mb-3"> A women’s safety mobile application with an emergency alert button that instantly notifies pre-saved contacts, provides a cyber-safety guide, and integrates live location tracking via map services. </p> 
            <p className="text-sm text-gray-600 mb-2"><b>Tech Stack:</b> Android SDK & Java, MongoDB, Figma</p> 
            <p className="text-sm text-gray-600 mb-4"> <b>Impact:</b> Provides quick access to emergency support and enhances personal safety awareness through digital guidance. </p> 
            <div className="flex gap-4"> <a href="https://github.com/ayushi-Sadani" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a> </div> </div> </div> 
            </section>

      {/* Achievements / Certifications */}
      <section id="achievements" className="py-20 px-6 max-w-4xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Awards Card */}
          <div className="p-6 bg-indigo-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏆</span>
              <h3 className="text-xl font-semibold">Awards</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Performer of the Month — Bajaj Finserv Direct Limited</li>
              <li>Best Performer of the Team — Bajaj Finserv Direct Limited</li>
              <li>Academic Excellence Award for 10 CGPA in 10th Standard</li>
            </ul>
          </div>
          {/* Leadership / Team Work Card */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-semibold">Leadership / Team Work</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Design Lead — Microsoft Student Ambassador Club (VIT)</li>
              <li>VIT Bhopal Placement Cell</li>
              <li>Core Team Member — VIT Bhopal Cyber Security Club</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="mb-6">Open to collaborations and new opportunities. Feel free to reach out!</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:asadani@uci.edu" className="hover:text-gray-200"><Mail className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/aayushi-sadani" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><Linkedin className="w-6 h-6" /></a>
          <a href="https://github.com/ayushi-Sadani" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><Github className="w-6 h-6" /></a>
        </div>
        <p className="mt-8 text-sm opacity-80">© {new Date().getFullYear()} Aayushi Sadani. All rights reserved.</p>
      </section>
    </div>
  );
}