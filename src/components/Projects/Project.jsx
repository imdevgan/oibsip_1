import React from "react";
import "./projects.css";

import p1 from "../images/p1.png";
import p2 from "../images/p2.png";

const Project = () => {
  return (
    <div id="Project">
      <div className="heading">
        <h1>My Projects</h1>
      </div>

      <div className="pro">
        {/* card 1 start here */}
        <div className="card">
          <div className="imgbox">
            <img src={p1} alt="" />
          </div>
          <div className="content">
            <h3>Valorant Wiki</h3>
            <p>
              Developed a showcase of the popular online shooter game Valorant using React.js as the front-end framework. Constructed with the help of an API to fetch Up-To-Date data about the game
            </p>
            <button className="project-b4">
              <a href="https://my-valorant-wiki.netlify.app/" target="blank">
                See Here
              </a>
            </button>
          </div>
        </div>
        {/* card 2 start here */}
        <div className="card">
          <div className="imgbox">
            <img src={p2} alt="" />
          </div>
          <div className="content">
            <h3>Admin Dashboard</h3>
            <p>Developed a responsive Admin Dashboard application utilizing React, demonstrating proficiency in frontend web development and component-based architecture</p>
            <button className="project-b4">
              <a href="https://my-admin-dashboard-react.netlify.app/" target="blank">
                See Here
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
