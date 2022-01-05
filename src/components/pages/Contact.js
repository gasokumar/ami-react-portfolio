import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      {/*  Github  */}
      <div>
        <a href="https://github.com/gasokumar" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt="The Github logo"
            width="280"
            height="280"
          ></img>
        </a>
        <p>Github</p>
      </div>
      {/* LinkedIn */}
      <div>
        <a
          href="https://www.linkedin.com/in/amitabh-asokumar-861384155/"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
            alt="The LinkedIn logo"
            width="280"
            height="280"
          ></img>
        </a>
        <p>LinkedIn</p>
      </div>
      {/* E-mail */}
      <div>
        <a href="mailto:gasokumar@gmail.com" target="_blank">
          <img
            src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_sq.jpg"
            alt="The LinkedIn logo"
            width="280"
            height="280"
          ></img>
        </a>
        <p>Email</p>
      </div>
    </div>
  );
}
