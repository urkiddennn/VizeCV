import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import HowItWorks from "../components/HowDoesItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to toggle visibility of the Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full h-screen flex justify-center items-center px-24 py-8 gap-3">
        <div className="w-1/2 h-full flex justify-center items-left flex-col gap-10">
          <h1 className="text-8xl font-semibold">
            Make <br />
            <span className="font-bold">Resume</span> <br />
            Easier <span className="font-bold text-8xl rotate-45">👌</span>
          </h1>
          <p className="text-md text-zinc-600">
            VizeCV is a user-friendly website for creating professional resumes
            and CVs. With customizable templates and real-time previews, it
            helps users craft standout resumes quickly and easily, perfect for
            students, job seekers, and professionals.
          </p>
          <div className="w-full flex justify-start items-center gap-8">
            <Link
              to={"dashboard"}
              className="text-md font-semibold text-white bg-purple-500 py-4 px-10 rounded-full"
            >
              Get Started
            </Link>
            <a href="" className="text-md font-semibold">
              {" "}
              📷 Watch Video
            </a>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg"
            alt="Creativity Illustration"
          />
        </div>
      </div>
      <HowItWorks />
      <Features />
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-500 text-white rounded-full p-4 shadow-lg hover:bg-purple-600 transition duration-300"
          aria-label="Back to Top"
        >
          ⬆️
        </button>
      )}
    </div>
  );
}

export default HeroPage;
