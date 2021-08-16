import React from "react";
import {} from "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" class="resume">
      <div class="container">
        <div class="text-center">
          <h1>Check Out My Resume</h1>
          <p>
            For a more complete list of skills, languages, and technologies
            check out my resume!
          </p>
          <a
            class="resumeDownloadButton"
            href="/react-portfolio/DanielRoubinResumeAugust2021.docx.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
