import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  // Function to scroll up
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="py-5 bg-dark text-white py-4 position-relative">
        <div className="container d-flex flex-column align-items-center text-center">
          {/* Social Media */}
          <div className="mb-3">
            <a target="_blank" href="https://www.linkedin.com/in/khaled-waled-7219b5294"
 className="mx-2 text-white social-icon">
              <i className="fa-brands fa-linkedin-in fs-4"></i>
            </a>
            <a  target="_blank"  href="https://github.com/Khaledwaled10" className="mx-2 text-white social-icon">
              <i className="fa-brands fa-github fs-4"></i>
            </a>
            <a  target="_blank"  href="https://www.facebook.com/khaled.ramdan.56863" className="mx-2 text-white social-icon">
              <i className="fa-brands fa-facebook fs-4"></i>
            </a>
            <a  target="_blank" href="mailto:khaledwaled8713@gmail.com" className="mx-2 text-white social-icon">
              <i className="fa-solid fa-envelope fs-4"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="mb-0 small">
            © 2025 <span className="text-success">Khaled Waled</span> | All Rights Reserved
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="btn btn-success back-to-top"
          title="Back to Top"
        >
          ↑
        </button>
      </div>
    </>
  );
}
