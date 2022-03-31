import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Beliefs() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/BCGsTO4.png)" }}
      >
        <h1 className="text-center text-white pt-5">Beliefs</h1>
        <a href="#bushido">
          <img
            src="https://imgur.com/dmGra8W.png"
            className="down-chevron bounce"
          ></img>
        </a>
      </section>
      <hr></hr>
      <section id="bushido">
        <h2 className="text-center pt-3">Bushido</h2>
        <Container className="pt-5">
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <img
                src="https://dummyimage.com/200x400/000/fff"
                className="content-image"
              />
            </Col>
            <Col>
              <p>
                Samurai lived (and died) by their code of honor, <i>Bushido</i>,
                which is literally translated as “warrior” (<i>bushi</i>) “way”
                (<i>do</i>). Samurai believed in a cycle of rebirth, and would
                accept death, believing good actions in a life carried on to the
                next life. In fact, if a samurai failed a task set by a master,
                lost their <a href="/Weapons#katana">katana</a> (their soul), or
                got disgraced in public, they would commit a painful ritual
                suicide called <i>seppuku</i> (belly cutting) to atone for their
                failure and start a new cycle. Samurai were sworn to their
                masters, and when their master died, all samurai pledged to that
                master would commit a group suicide called <i>junshi</i>, since
                a samurai served their master for life. Their code of honor
                governed their entire lives and how they lived.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <hr></hr>
      <section id="religion">
        <h2 className="text-center pt-3">Religion</h2>
        <Container className="pt-5">
          <Row>
            <Col>
              <p>
                Religion complemented Bushido, their code of honor. For this
                reason, most samurai preferred Zen Buddhism, an adapted form of
                Buddhism that prioritized discipline, acceptance of death, and
                simplicity. It had relatively simple rituals and fit into the
                samurai lifestyle. It was shaped by many other beliefs, such as
                Confucianism and the native Japan Shinto gods.
              </p>
            </Col>
            <Col xs={12} lg={3} className="text-center mb-4">
              <img
                src="https://dummyimage.com/200x400/000/fff"
                className="content-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Beliefs;
