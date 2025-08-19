import React, { useEffect } from 'react';
import Typed from 'typed.js';

import img from './assets/imgi_1_avataaars.svg';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  useEffect(() => {
    const options = {
      strings: ["I Am Developer", "I Am Designer", "I Am Khaled Ramdan"],
      typeSpeed: 20,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="img-bg d-flex flex-column justify-content-center align-items-center text-white">
        <h1 className="display-3 fw-bolder">Hello</h1>
        <p className="hero-subtitle fs-1">
          <span className="typed"></span>
        </p>
        <div className="icon-hero mt-3">
          <a href="https://www.facebook.com/khaled.ramdan.56863">
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="fa-solid fa-circle fa-stack-2x text-dark opacity-50" />
              <i className="fa-brands fa-facebook-f fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="https://github.com/Khaledwaled10">
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="fa-solid fa-circle fa-stack-2x text-dark opacity-50" />
              <i className="fa-brands fa-github    fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/khaled-waled-7219b5294">
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="fa-solid fa-circle fa-stack-2x text-dark opacity-50" />
              <i className="fa-brands fa-linkedin fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="#home">
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="fa-solid fa-circle fa-stack-2x text-dark opacity-50" />
              <i className="fa-brands fa-behance fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a href="#home">
            <span className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="fa-solid fa-circle fa-stack-2x text-dark opacity-50" />
              <i className="fa-brands fa-youtube fa-stack-1x fa-inverse" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
