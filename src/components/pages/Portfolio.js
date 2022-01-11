import React from "react";
import GiftListImg from "../../assets/images/GiftListImg.jpg";
import WorkoutImg from "../../assets/images/WorkoutImg.jpg";
import TechBlogImg from "../../assets/images/TechBlogImg.jpg";
import {} from "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="featuredProjects" class="featuredProjects">
      <div class="container">
        <div class=" section-title">
          <h2 class="featuredProjectsHeader">Featured Projects</h2>
        </div>
        <div class="row">
          {/* <!-- first block on the left --> */}

          <div
            class="card projectSpacing"
            style={{ width: "18rem"  }}
          >
            <img class="card-img-top" src={TechBlogImg} alt="tech blog img" />
            <div class="card-body">
              <h5 class="card-title">Tech Blog</h5>
              <p class="card-text">
                A tech blog built using Express, node, MySQL, and JavaScript.
              </p>
              <a
                href="https://github.com/DannyRoubin/Tech-Blog"
                class="btn btn-primary projectButton"
                style={{marginRight: ".3rem" }}
              >
                Github Repo
              </a>
              <a
                href="https://still-reaches-72482.herokuapp.com/"
                class="btn btn-primary projectButton"
              >
                Live App
              </a>
            </div>
          </div>

          {/* <!-- block in the middle --> */}

          <div
            class="card projectSpacing"
            style={{ width: "18rem" }}
          >
            <img
              class="card-img-top"
              src={GiftListImg}
              alt="Gift list app img"
            />
            <div class="card-body">
              <h5 class="card-title">GiftList</h5>
              <p class="card-text">
                Gift list allows users to keep track of gifts for others much
                easier. Built using JavaScript, SQL, and many npm packages.
              </p>
              <a
                href="https://github.com/CailinBellWold/Project-2-Gift-List"
                class="btn btn-primary projectButton"
                style={{marginRight: ".3rem" }}
              >
                GitHub Repo
              </a>
              <a
                href="https://project-2-gift-list.herokuapp.com/"
                class="btn btn-primary projectButton"
              >
                Live App
              </a>
            </div>
          </div>

          {/* <!-- rightmost block --> */}

          <div
            class="card projectSpacing"
            style={{ width: "18rem" }}
          >
            <img
              class="card-img-top"
              src={WorkoutImg}
              alt="Workout tracker app img"
            />
            <div class="card-body">
              <h5 class="card-title">Workout Tracker</h5>
              <p class="card-text">
                Workout tracker app built using JavaScript, Node, and MongoDB
              </p>
              <a
                href="https://github.com/DannyRoubin/Workout-Tracker"
                class="btn btn-primary projectButton"
                style={{marginRight: ".3rem" }}
              >
                GitHub Repo
              </a>
              <a
                href="https://workout-tracker--app.herokuapp.com/"
                class="btn btn-primary projectButton"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
