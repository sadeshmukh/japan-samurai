import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Clothing() {
  return (
    <React.Fragment>
      <section className="title-section">
        <h1 className="text-center">Clothing</h1>
      </section>

      <Container className="pt-5">
        <Row>
          <Col xs={12} lg={3} className="text-center mb-4">
            <img
              src="https://i.imgur.com/MsYtve9.png"
              className="lg-3 content-image"
              // useMap="#clothingmap"
            />
            {/* <map name="clothingmap">
              <area
                target=""
                alt="Head"
                title="Head"
                href="/beliefs"
                coords="81,83,168,159"
                shape="rect"
              />
              <area
                target=""
                alt="Sword"
                title="Sword"
                href="/weapons"
                coords="9,283,2,302,105,432,193,494,180,469,140,442,79,383"
                shape="poly"
              />
              <area
                target=""
                alt="Armor"
                title="Armor"
                href="/clothing"
                coords="72,181,187,369"
                shape="rect"
              />
            </map> */}
          </Col>
          <Col className="text">
            Samurai placed much value in their armor, which was very decorative,
            as well as functional. The armor was designed to intimidate, while
            providing solid protection against blades and arrows. The armor was
            composed mainly of iron plates tied together, creating a flexible
            and impenetrable armor. On their head, they had a helmet, sometimes
            with animal horns or antlers, which gave them the appearance of
            demons. The helmet was also made of high-quality metal, which served
            the dual purpose of intimidation and protection. They also wore a
            demonic mask, which only served to scare, since it didn’t offer any
            real protection. Underneath their armor, they wore a kimono and
            loose pants.
            {}
            TODO: Labeled Samurai Diagram
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Clothing;
