import React from "react";
import mealfiy from "../src/assets/Screenshot 2025-08-17 153702.png";
import morgan from "../src/assets/morgan.png";
import bookmarker from "../src/assets/bookmarker.png";
import smartlogin from '../src/assets/smartlogin.png';
import weather from '../src/assets/weather.png';
import games from '../src/assets/games.png';
import social from '../src/assets/social.png';

export default function Portfolio() {
  const projects = [
    { img: mealfiy, link: "https://e-commrce-five.vercel.app/", title: "E-commerce Website" },
    { img: social, link: "https://social-vert-tau.vercel.app/", title: "Social Media Clone" },
    { img: games, link: "https://khaledwaled10.github.io/Games/", title: "Games Website" },
    { img: weather, link: "https://khaledwaled10.github.io/Weather/", title: "Weather App" },
    { img: bookmarker, link: "https://khaledwaled10.github.io/Bookmarker/", title: "Bookmarker App" },
    { img: smartlogin, link: "https://khaledwaled10.github.io/smartLogin", title: "Smart Login System" },
    { img: morgan, link: "https://khaledwaled10.github.io/Bootstrap-demo/", title: "Morgan Bootstrap Demo" },
    { img: mealfiy, link: "https://khaledwaled10.github.io/Mealifay/", title: "Mealfiy Website" }
  ];

  return (
    <div className="container p-5">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="item col-lg-4" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img 
                  src={project.img} 
                  className="img-fluid rounded-3 project-img" 
                  alt={project.title} 
                />
                <div className="overlay d-flex justify-content-center align-items-center">
                </div>
              </div>
            </a>
            <h6 className="text-center mt-2">{project.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
