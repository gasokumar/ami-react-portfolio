// This will be the component for one project and will be used multiple times to render each project in the Portfolio.js page

// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project

// * A link to the deployed application

// * A link to the corresponding GitHub repository

import React from "react";
// import "./App.css";

export default function Project() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <img src="img.jpg" alt="John" style={{ width: "100%" }} />
        <h1>John Doe</h1>
        <p className="title">CEO &amp; Founder, Example</p>
        <p>Harvard University</p>
        {/* <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a> */}
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
}
