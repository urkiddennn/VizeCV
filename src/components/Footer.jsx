import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-purple-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo and Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">VizeCV</h2>
          <p className="text-sm text-black">
            Craft professional resumes effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <a href="#features" className="text-gray-300 hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white">
            How It Works
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl"
          >
            🐦
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl"
          >
            📘
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl"
          >
            💼
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center text-black text-sm mt-4">
        © {new Date().getFullYear()} VizeCV. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
