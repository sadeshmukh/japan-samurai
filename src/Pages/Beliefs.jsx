import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";

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
      <section id="bushido" className="p-5">
        <h2 className="text-center pt-3">Bushido</h2>
        <Container className="pt-5">
          <img
            src="https://i.imgur.com/ijsAZ1f.png"
            className="content-image rounded w-25 float-end m-3"
          />
          <p>
            Samurai lived (and died) by their code of honor, <i>Bushido</i>,
            which is literally translated as “warrior” (<i>bushi</i>) “way” (
            <i>do</i>). Samurai believed in a cycle of rebirth, and would accept
            death, believing good actions in a life carried on to the next life.
            In fact, if a samurai failed a task set by a master, lost their{" "}
            <a href="/Weapons#katana">katana</a> (their soul), or got disgraced
            in public, they would commit a painful ritual suicide called{" "}
            <i>seppuku</i> (belly cutting) to atone for their failure and start
            a new cycle. Samurai were sworn to their masters, and when their
            master died, all samurai pledged to that master would commit a group
            suicide called <i>junshi</i>, since a samurai served their master
            for life. Their code of honor governed their entire lives and how
            they lived.
          </p>
        </Container>
      </section>
      <hr></hr>
      <section id="zen" className="bg-dark p-5">
        <h2 className="text-center pt-3 text-light">Zen</h2>
        <Container className="pt-5">
          <Row>
            <Col>
              <p className="text-light">
                Religion complemented Bushido, their code of honor. For this
                reason, most samurai preferred Zen Buddhism, an adapted form of
                Buddhism that prioritized discipline, acceptance of death, and
                simplicity. It had relatively simple rituals and fit into the
                samurai lifestyle. It was shaped by many other beliefs, such as
                Confucianism and the native Japan Shinto gods.
              </p>
            </Col>
            <Col xs={12} lg={6} className="text-center mb-4">
              <Tilt
                className="text-center"
                options={{
                  reverse: true,
                  max: 50,
                  scale: 1,
                }}
              >
                <img
                  src="https://i.imgur.com/6v1P5qe.jpg"
                  className="content-image rounded"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </section>
      <hr></hr>
      <section id="shinto" className="p-5">
        <Container>
          <h2 className="text-center pt-3">Shinto</h2>
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/t7YUuiQ.jpg"
                  className="content-image rounded"
                />
              </Tilt>
            </Col>
            <Col>
              <p>
                Shinto is the original system of belief in Japan, and predates
                all historical records. Shinto revolves around what makes
                Japanese land Japanese: namely, the land and weather. Shinto
                recognizes nature as <i>kami</i>, divine spirits, in everything:
                waterfalls, grass, mountains, you name it. They would honor
                nature by placing shrines and garlands to recognize it. New
                religions introduced to Japan incorporated Shinto, allowing
                people to convert to these religions without sacrificing their
                held beliefs.
              </p>
            </Col>
          </Row>
          <Row>
            <Tilt options={{ axis: "x" }}>
              <Col xs={12} className="bg-warning rounded p-3 m-4 opacity-75">
                <p>
                  💡 <b>Did you know?</b> In Shinto belief, the first emperor,
                  (grandson of <i>Amaterasu</i>, the sun goddess, shown above)
                  was given a sword, pendant, and bronze mirror as symbols of
                  the emperor. Today, Japan still has an emperor, who still
                  carries these three items as symbols of his power.
                </p>
              </Col>
            </Tilt>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Beliefs;
