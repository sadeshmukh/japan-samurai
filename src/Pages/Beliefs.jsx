import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Beliefs() {
  return (
    <React.Fragment>
      <section className="title-section">
        <h1 className="text-center">Beliefs</h1>
      </section>
      <hr></hr>
      <h2 className="text-center">Bushido</h2>
      <Container className="pt-5">
        <Row>
          <Col xs={12} lg={3} className="text-center mb-4">
            <img
              src="https://dummyimage.com/200x400/000/fff"
              className="content-image"
            />
          </Col>
          <Col>
            Samurai lived (and died) by their code of honor, Bushido, which is
            literally translated as “warrior” (bushi) “way” (do). Samurai
            believed in a cycle of rebirth, and would accept death, believing
            good actions in a life carried on to the next life. In fact, if a
            samurai failed a task set by a master, lost their katana (their
            soul), or got disgraced in public, they would commit a painful
            ritual suicide called seppuku (belly cutting) to atone for their
            failure and start a new cycle. Samurai were sworn to their masters,
            and when their master died, all samurai pledged to that master would
            commit a group suicide called junshi, since a samurai served their
            master for life. Their code of honor governed their entire lives and
            how they lived.
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Beliefs;
