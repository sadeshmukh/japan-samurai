import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Weapons() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/kZ7d4i8.png)" }}
      >
        <h1 className="text-center text-white pt-5">Battle</h1>
        <a href="#katana">
          <img
            src="https://imgur.com/dmGra8W.png"
            className="down-chevron bounce"
          ></img>
        </a>
      </section>
      <section id="katana">
        <h2 className="text-center pt-3">Katana</h2>
        <Container>
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <img src="https://dummyimage.com/200x400/000/fff" />
            </Col>
            <Col>
              <p>
                Samurai placed great importance in the weapons they carried, the
                most well-known of which is the <i>katana</i>. In their code of
                honor, <a href="/Beliefs#bushido">Bushido</a>, the katana was
                believed to hold a samurai’s soul, and samurai cared about the
                katana more than wealth, material goods, or even family. They
                wouldn’t leave their katana, even during sleep. Touching another
                samurai’s katana was considered a great offense, and could
                result in a challenge to the death. In addition, katanas weren’t
                just believed to be strong, katanas were forged with extreme
                precision. They had two layers: an inner, soft, and flexible
                core, and an outer hard shell. The core allowed the sword to
                withstand blows, but at the same time be sharp enough to slice
                through any obstacles. The steel used to create them was also a
                special kind of Japanese steel called <i>tamahagane</i>, which
                is a high purity version of Japanese steel. Since the sword
                represented their soul, samurai took great lengths to keep their
                blades safe and in good repair.
              </p>
              sidebar: interesting fact, kept katana with baby to bond |
              sidebar: why blade was curved
            </Col>
            <Col xs={12} className="bg-warning rounded p-3 m-4 opacity-75">
              <p>
                <b>Did you know?</b> Newborn samurai would have their katana
                placed with them as early as possible so they could bond.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="other-weapons"></section>
    </React.Fragment>
  );
}
export default Weapons;
