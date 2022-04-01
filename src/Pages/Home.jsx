import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/BFXP88F.png)" }}
      >
        <h1 className="text-center text-white pt-5">Samurai</h1>
        <a href="#overview">
          <img
            src="https://imgur.com/dmGra8W.png"
            className="down-chevron bounce"
          ></img>
        </a>
      </section>
      <section id="overview">
        <h2 className="text-center pt-3">Overview</h2>
        <Container>
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <img
                src="https://dummyimage.com/200x400/000/fff"
                className="content-image"
              />
            </Col>
            <Col>
              <p>
                In culture, samurai have been depicted as fearless, fearsome,
                loyal, noble warriors who fight to the death with their katana.
                Samurai were generally assigned to tasks such as guarding
                territory, fighting enemies of the government, and defending
                against bandits. However, in reality, samurai were much more.
                Though they were expertly trained in martial arts, archery, and
                horseback riding, samurai in times of peace were also expert
                diplomats, tax collectors, artists, and scholars. They were very
                intellectual, skilled in the art of <i>Bun</i> (learning). In
                fact, the masters to which samurai were bound - <i>daimyo</i> -
                were themselves samurai who were vassals of the shogun.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Home;
