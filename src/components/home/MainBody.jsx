import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
           <div>
  Instructor: <strong>Prakash Hegde</strong> (pH)
</div>

          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image} fa-3x socialicons`} />
              </a>
            ))}
          </div>
<a
  className="btn btn-outline-light btn-lg"
  href="#aboutme"
  role="button"
  aria-label="Learn more about me"
>
  More about me
</a>

<a
  className="btn btn-outline-light btn-lg ms-3" // This adds left margin (gap)
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rmbalur15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  role="button"
  aria-label="Contact me via email"
>
  Contact Me
</a>


        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
