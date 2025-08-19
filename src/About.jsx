import React from 'react'
import { Link } from 'react-router-dom'
import boot from './assets/Bootstrap_logo.svg.png';
import html from './assets/4943029.png';
import javascript from './assets/javascript-logo-javascript-icon-transparent-free-png.webp';
import css from './assets/download.png';
import tail from './assets/tailwind-icon-lg.png';
import react from './assets/React_(web_framework)-Logo.wine.svg';

export default function About() {
  return (
    <>
      <section className="py-5" id="about">
        <div className="container-fluid container-md pb-4">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-7 col-xl-6">
              <div className="mt-5">
                <h3 className="fw-bold">About Me.</h3>
                <p className="text-muted lead">Frontend Developer</p>
              </div>
              <div>
                <p className="text-muted fs-6 fw-semibold">
                  I am a passionate Frontend Developer specializing in building responsive
                  and modern web applications using React.js, JavaScript, and modern CSS
                  frameworks like Tailwind and Bootstrap.
                </p>
                <p className="text-muted fs-6 fw-semibold">
                  Currently studying Computer Science at Tanta University (3rd year).
                  Completed a Frontend Development Course at Route Academy. Always eager to
                  learn and improve my skills.
                </p>
              </div>

              <div className="skills">
                {/* Web Design */}
                <div className="progress mt-5 rounded-2" style={{height: 25}}>
                  <div className="progress-bar bg-black position-relative" style={{width: '95%', borderRadius: 5}}>
                    <span className="position-absolute ms-2 fw-light fs-6">Web Design</span>
                    <span className="position-absolute end-0 fw-light fs-6 me-3">95%</span>
                  </div>
                </div>

                {/* Problem Solving */}
                <div className="progress mt-4 rounded-2" style={{height: 25}}>
                  <div className="progress-bar bg-black position-relative" style={{width: '60%', borderRadius: 5}}>
                    <span className="position-absolute ms-2 fw-light fs-6">Problem Solving</span>
                    <span className="position-absolute end-0 fw-light fs-6 me-3">60%</span>
                  </div>
                </div>

                {/* Development */}
                <div className="progress my-4 rounded-2" style={{height: 25}}>
                  <div className="progress-bar bg-black position-relative" style={{width: '90%', borderRadius: 5}}>
                    <span className="position-absolute ms-2 fw-light fs-6">Development</span>
                    <span className="position-absolute end-0 fw-light fs-6 me-3">90%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="btn btn-dark me-3">Download C.V</button>
                      <a  target="_blank" href="mailto:khaledwaled8713@gmail.com" >
                  <button className="btn btn-outline-secondary">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
