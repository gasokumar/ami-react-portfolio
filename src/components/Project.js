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
      {/* First Project */}
      <div>
        <h1>Moodvie</h1>
        <img
          src="https://user-images.githubusercontent.com/87357653/139324458-2e2114af-04d5-44b5-a771-2f0c9108d0a3.png"
          alt="Project Thumbnail"
          style={{ width: "50%" }}
          href="https://teddysahr.github.io/project-1/"
          target="_blank"
        />
        <p>
          An application that provides users with information on where they can
          stream/watch an inputted movie
        </p>
        <a href="https://teddysahr.github.io/project-1/" target="_blank">
          A Link to the Deployed Application
        </a>
        <a href="https://github.com/teddysahr/project-1" target="_blank">
          A Link to the Github Repository
        </a>
      </div>
      <div>
        {/* Second Project */}
        <h1>Team Profile Generator</h1>
        {/* Change this image */}
        <img
          src="https://res.infoq.com/articles/who-is-on-the-team/en/headerimage/who-is-on-the-team-header-1612952290708.jpg"
          alt="Project Thumbnail"
          style={{ width: "50%" }}
          href=" https://gasokumar.github.io/HW8---Team-Profile-Generator/"
          target="_blank"
          rel="noreferrer"
        />

        <p>
          An app that creates employee profiles and generates an HTML page that
          will showcase these profiles based on user input.
        </p>
        <a
          href=" https://gasokumar.github.io/HW8---Team-Profile-Generator/"
          target="_blank"
          rel="noreferrer"
        >
          A Link to the Deployed Application
        </a>
        <a
          href=" https://github.com/gasokumar/HW8---Team-Profile-Generator"
          target="_blank"
          rel="noreferrer"
        >
          A Link to the Github Repository
        </a>
      </div>
      <div>
        {/* Third Project */}
        <h1>E-Commerce Back End</h1>
        <img
          src="https://acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png"
          alt="Project Thumbnail"
          style={{ width: "50%" }}
        />
        <p>
          This app was created using sequelize, an object-relational mapper. The
          models included in this project include "Category", "Product", "Tag",
          and "ProductTag", with associations between them to relate them. Each
          category has many products, each product can have many tags, and each
          tag can belong to many products.
        </p>
        {/* <a href="" target="_blank" rel="noreferrer">
          This application wasn't deployed, but instead runs in your IDE!
        </a> */}
        <p>This application wasn't deployed, but instead runs in your IDE!</p>
        <a
          href=" https://github.com/gasokumar/HW11---E-Commerce-Backend"
          target="_blank"
        >
          A Link to the Github Repository
        </a>
      </div>
    </div>
  );
}
