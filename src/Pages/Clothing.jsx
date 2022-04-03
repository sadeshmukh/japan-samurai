import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";

function Clothing() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/12T7nPO.png)" }}
      >
        <h1 className="text-center text-white pt-5">Clothing</h1>
        <a href="#armor">
          <img
            src="https://imgur.com/dmGra8W.png"
            className="down-chevron bounce"
          ></img>
        </a>
      </section>
      <hr></hr>
      <section id="armor">
        <h2 className="text-center pt-3">Armor</h2>
        <Container className="pt-5">
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/MsYtve9.png"
                  className="lg-3 content-image"
                />
              </Tilt>
            </Col>
            <Col className="">
              <p>
                Samurai placed much value in their armor, which was very
                decorative, as well as functional. The armor was designed to
                intimidate, while providing solid protection against blades and
                arrows. The armor was composed mainly of iron plates tied
                together, creating a flexible and impenetrable armor. On their
                head, they had a helmet, sometimes with animal horns or antlers,
                which gave them the appearance of demons. The helmet was also
                made of high-quality metal, which served the dual purpose of
                intimidation and protection. They also wore a demonic mask,
                which only served to scare, since it didn’t offer any real
                protection. Underneath their armor, they wore a <i>kimono</i>{" "}
                and loose pants. Samurai tied a belt around their waist, called
                an <i>obi</i>, which held their swords.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <hr></hr>
      <section id="everyday-wear">
        <h2 className="text-center pt-3">Everyday Wear</h2>
        <Container>
          <Row>
            <Col>
              <p>
                When not fighting, samurai took care of their appearance.
                Samurai wore a kimono on a day-to-day basis. It consisted of two
                layers, and was made of silk. The kimono was a status symbol,
                more expensive ones representing a higher class. Underneath
                their kimono, they wore a cloth tied around their waist. Samurai
                looked down on colorful patterns, believing they were immodest.
                They also wore a two-piece pair of clothes and wide trousers on
                top of their kimono outside their house. In addition to their
                clothing, samurai took great care to style their hair, which
                they tied into a topknot called a <i>chomage</i>. They would
                also shave the tops of their heads before battles to reduce the
                heat.
              </p>
            </Col>
            <Col xs={12} lg={2} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/IrXBBSa.png"
                  className="lg-3 content-image rounded"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Clothing;
