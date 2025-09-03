import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md sticky top-0">
        <h1 className="text-2xl font-bold">Rohit Kumar Rai</h1>
        <div className="flex gap-6">
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
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Rohit 👋</h2>
        <p className="text-lg text-gray-300 mb-6">
          Web Developer | React | Tailwind CSS
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Rohit04Rai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
          >
            <FaGithub size={22} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/rohit-kumar-rai-04dec"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition"
          >
            <FaLinkedin size={22} /> LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm an aspiring Web Developer passionate about building interactive
          and responsive websites. I enjoy working with React, Tailwind CSS, and
          modern web technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-4 rounded-lg">HTML</div>
          <div className="bg-gray-800 p-4 rounded-lg">CSS</div>
          <div className="bg-gray-800 p-4 rounded-lg">JavaScript</div>
          <div className="bg-gray-800 p-4 rounded-lg">React</div>
          <div className="bg-gray-800 p-4 rounded-lg">Tailwind CSS</div>
          <div className="bg-gray-800 p-4 rounded-lg">Git & GitHub</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              A personal portfolio to showcase my skills and projects.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">E-commerce Clone</h3>
            <p className="text-gray-300 mb-4">
              A basic e-commerce website clone with React and Tailwind.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>
        <a
          href="mailto:er.rohitrai87@gmail.com.com"
          className="flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition mx-auto w-max"
        >
          <FaEnvelope size={20} /> Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 mt-10">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Rohit Kumar Rai. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
