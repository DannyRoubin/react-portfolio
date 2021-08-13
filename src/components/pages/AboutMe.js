import React from "react";
import profilePic from "../../assets/images/profilePic.JPG";
import {} from "./AboutMe.css";

export default function AboutMe() {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2 ">
            <img
              src={profilePic}
              class="img-fluid float-end rounded"
              alt="Daniel Roubin Profile pic"
            />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 ">
            <h3 class="aboutMeHeader">About Me</h3>
            <p class="aboutMeBody">
              I am currently a sophomore student at the University of Washington
              Bothell studying Computer Science. Besides being enrolled full
              time at the University of Washington Bothell, I am also currently
              enrolled in the University of Washington full stack coding
              bootcamp. I enjoy solving difficult problems and working with
              teams of other motivated individuals to complete projects. I look
              forward to working on challenging problems and growing my
              knowledge and skills within the field.
              <ul>
                <li class="aboutMePoints">
                  Known languages/technologies: Html 5, CSS 3, JavaScript,
                  Node.js, jquery, Express.JS, MySQL, Bootstrap, Foundation,
                  MealDB API, Pixabay API, OpenWeatherMap API, Markdown,
                  MongoDB, IndexedDB, React, graphQL and Java
                </li>
                <li class="aboutMeSkills">
                  Useful Skills: Hard working, great with teams, and actively
                  seeking ways to expand knowledge and skills within the field
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
