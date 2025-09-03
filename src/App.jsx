import React from "react";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Rohit Kumar Rai</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-bold">Hi, I'm Rohit 👋</h2>
        <p className="mt-4 text-lg text-gray-300">
          Web Developer | React | Node.js | Tailwind CSS
        </p>
        <a
          href="/resume.pdf" // apna resume public folder me upload karna
          download
          className="mt-6 bg-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          📄 Download Resume
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 max-w-2xl">
          I am a passionate Web Developer skilled in modern technologies like
          React, Tailwind CSS, and Node.js. I love building user-friendly,
          responsive, and scalable web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-700 p-4 rounded-lg">⚛️ React</div>
          <div className="bg-gray-700 p-4 rounded-lg">🎨 Tailwind CSS</div>
          <div className="bg-gray-700 p-4 rounded-lg">🟢 Node.js</div>
          <div className="bg-gray-700 p-4 rounded-lg">🗄️ MongoDB</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              🎵 Music Recommendation System
            </h3>
            <p className="text-gray-300 mt-2">
              Built a machine learning-based music recommendation system using
              Spotify dataset.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://github.com/Rohit04Rai/Music-Recommendation-System-Python"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://rohit-music-recommender.netlify.app"
                target="_blank"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              📊 Sales Performance Dashboard
            </h3>
            <p className="text-gray-300 mt-2">
              Created an interactive dashboard using IBM Cognos Analytics for
              sales insights and forecasting.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://github.com/Rohit04Rai"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300">📧 Email: er.rohitrai87@gmail.com</p>
        <p className="text-gray-300">
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/rohit-kumar-rai-04dec"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/rohit
          </a>
        </p>
        <p className="text-gray-300">
          💻 GitHub:{" "}
          <a
            href="https://github.com/Rohit04Rai"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            github.com/Rohit04Rai
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-4 text-center text-gray-500">
        © 2025 Rohit Kumar Rai | All Rights Reserved
      </footer>
    </div>
  );
}
