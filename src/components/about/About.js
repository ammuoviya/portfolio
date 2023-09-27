import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Element } from "react-scroll";
import "./About.css";
function About() {
  const para = [
    "Hi Everyone, I am **OVIYA** from **TIRUPPUR, TAMIL NADU**.",
    " I am a Full Stack Developer with a passion for building beautiful & user-friendly websites.I have a strong understanding of both front-end & back-end development,& I am excited to put my skills to use in a professional setting.I am a quick learner & a team player, & I am confident that I can be a valuable assest to any web development team.",
  ];

  return (
    <Element id="about">
      <div className="about-main">
        <div className="about">
          <div className="row a_contains mx-auto">
            <div className=" col-sm-12 col-md-12 col-lg-6  about-left-contain">
              <img
                src="https://www.roessner.tech/static/media/about.d8fe852f6a9badcd8616.png"
                alt="about"
              />
            </div>
            <div className=" col-sm-12 col-md-12 col-lg-6 about-right-contain">
              <h2>
                Know Who I <span className="about-highlight">AM</span>
              </h2>
              {para.map((para, index) => {
                return (
                  <p key={index}>
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => (
                          <span className="about-highlight" {...props} />
                        ),
                      }}
                      children={para}
                    />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
