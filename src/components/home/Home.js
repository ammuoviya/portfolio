import React from "react";
import { Element } from "react-scroll";
import "./Home.css";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CallIcon from "@mui/icons-material/Call";
import Type from "./Type";
import { Link } from "react-scroll";
function Home() {
  return (
    <Element name="home">
      <div className="container-fluid home">
        <div className="row ">
          <div className=" col-sm-12 col-md-6 col-lg-6 home-left-container ">
            <div>
              <h1>
                <span className="hii"> Hii!...</span>
              </h1>
              <h1>
                I'm <span className="hii">Oviya Chelladurai</span>
              </h1>
              <h3 className="type" style={{ color: "pink", minWidth: "350px" }}>
                <Type />
              </h3>
              <div className="home-icon">
                <span
                  className="home-icon"
                  onClick={() =>
                    window.open("https://github.com/ammuoviya", "_blank")
                  }
                >
                  <GitHubIcon fontSize="medium" />
                </span>
                <span
                  className="home-icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/oviya-chelladurai-1995661ab/",
                      "_blank"
                    )
                  }
                >
                  <LinkedInIcon fontSize="medium" />
                </span>
                <span
                  className="home-icon"
                  onClick={() =>
                    window.open("mailto:oviya200@gmail.com", "_blank")
                  }
                >
                  <MailIcon fontSize="medium" />
                </span>
                <span
                  className="home-icon"
                  onClick={() => window.open("tel://+918526223732", "_blank")}
                >
                  
                  <CallIcon fontSize="small" />
                </span>
              </div>
              <button type="button" className="home-button">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={350}
                  duration={250}
                >
                  Contact Me <TouchAppIcon />
                </Link>
              </button>
              <button type="button" className="home-button ms-3">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={250}
                >
                  Projects <EventNoteIcon />
                </Link>
              </button>
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 home-right-container">
            <img src="./asset/programmer.svg" alt="heroimage2" />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Home;
