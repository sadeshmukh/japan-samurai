import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import { ProjectTimeline } from "../ComponentList";

function Home() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/BFXP88Fl.png)" }}
      >
        <h1 className="text-center text-white pt-5">Samurai</h1>
        <a href="#home-timeline">
          <img
            src="https://imgur.com/dmGra8W.png"
            className="down-chevron bounce"
          ></img>
        </a>
      </section>

      <section id="home-timeline">
        <h2 className="text-center pt-3">Timeline</h2>
        <ProjectTimeline />
      </section>
    </React.Fragment>
  );
}
export default Home;
