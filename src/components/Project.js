// This will be the component for one project and will be used multiple times to render each project in the Portfolio.js page

// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project

// * A link to the deployed application

// * A link to the corresponding GitHub repository

import React from "react";
// import "./App.css";
// Will have to use props to pass in name of project, image, and link

export default function Project() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />

      <div className="card">
        <h1>Project Title</h1>
        <img src="" alt="Project Thumbnail" style={{ width: "100%" }} />
        <p className="title"> </p>
        <p>Description of Project</p>
        <a href="" target="_blank">
          A Link to the Deployed Application
        </a>
        <a href="" target="_blank">
          A Link to the Github Repository
        </a>
      </div>
    </div>
  );
}
