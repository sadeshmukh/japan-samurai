import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";

function Education() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/RJdsztu.jpg)" }}
      >
        <h1 className="text-center text-white pt-5">Education</h1>
        <a href="#edu-overview">
          <img
            src="https://imgur.com/dmGra8W.png"
            className="down-chevron bounce"
          ></img>
        </a>
      </section>
      <section id="edu-overview">
        <h2 className="text-center pt-3">Overview</h2>
        <Container>
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/EZ3X7Pn.jpg"
                  className="content-image rounded"
                />
              </Tilt>
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
                were themselves samurai who were vassals of the shogun. Their
                education was treated to be just as important as their physical
                training.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <hr></hr>
      <section id="childhood">
        <h2 className="text-center pt-3">Childhood</h2>
        <Container>
          <Row>
            <Col>
              <p>
                Being a samurai was hereditary, meaning it was passed down
                through families. From early on in childhood, samurai were
                trained in a blend of physical training, poetry, general
                education, and discipline. They studied Kendo, the martial art
                of the sword (similar to fencing),{" "}
                <a href="/beliefs#bushido">Bushido</a>, their code of honor, and{" "}
                <a href="/beliefs#zen">Zen</a>, the dominant religion for
                samurai of the time.
              </p>
            </Col>
            <Col xs={12} lg={4} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/JQ5DjJs.png"
                  className="content-image rounded w-100"
                />
              </Tilt>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/fcGJcvc.jpg"
                  className="content-image rounded w-100"
                />
              </Tilt>
            </Col>
            <Col>
              <p>
                Up-and-growing samurai would start training at the age of 3. By
                the time they were 6, they would have a real sword. Samurai
                placed much importance on strengthening their body, mind, and
                spirit. Training was given irrespective of gender, though women
                were found on the battlefield less often. Samurai would spend
                much of their time training their archery with the{" "}
                <a href="/battle#yumi">yumi</a>, striking and parrying with the
                katana, wielding their <a href="/battle#blades">wakizashi</a>{" "}
                and other short swords, and other non-weapon martial arts.
              </p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>
                Temples in feudal Japan were essentially universities. Scholars
                and samurai would go there to train their spiritual mindset,
                which was bundled in with their other education. Temples
                functioned as normal schools in that way, providing education
                for those not destined to be directly involved with temple
                affairs.
              </p>
            </Col>
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/sku49gEm.jpg"
                  className="content-image rounded w-100"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Education;
