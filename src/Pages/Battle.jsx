import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";

function Weapons() {
  return (
    <React.Fragment>
      <section
        className="title-section text-center"
        style={{ backgroundImage: "url(https://i.imgur.com/kZ7d4i8l.png)" }}
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
          <img
            src="https://i.imgur.com/cfuSgmB.png"
            className="content-image rounded w-25 float-end mt-5"
          />
          <p>
            Samurai placed great importance in the weapons they carried, the
            most well-known of which is the <i>katana</i>. In their code of
            honor, <a href="/Beliefs#bushido">Bushido</a>, the katana was
            believed to hold a samurai’s soul, and samurai cared about the
            katana more than wealth, material goods, or even family. They
            wouldn’t leave their katana, even during sleep. Touching another
            samurai’s katana was considered a great offense, and could result in
            a challenge to the death. In addition, katanas weren’t just believed
            to be strong, katanas were forged with extreme precision. They had
            two layers: an inner, soft, and flexible core, and an outer hard
            shell. The core allowed the sword to withstand blows, but at the
            same time be sharp enough to slice through any obstacles. The steel
            used to create them was also a special kind of Japanese steel called{" "}
            <i>tamahagane</i>, which is a high purity version of Japanese steel.
            Since the sword represented their soul, samurai took great lengths
            to keep their blades safe and in good repair. To test a katana, they
            initially tested it on dead convicts' bodies, but after it was
            outlawed, they tested it on a combination of bamboo and rice, which
            mimicked flesh.
          </p>

          <Row>
            <Col xs={12} className="bg-warning rounded p-3 m-4 opacity-75">
              <p>
                💡 <b>Did you know?</b> Newborn samurai would have their katana
                placed with them as early as possible so they could bond.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="bg-secondary rounded p-4 m-4 opacity-75">
              <Row>
                <Col>
                  <p className="text-light my-5">
                    You may have wondered why the katana was curved. This is no
                    fluke; in fact, the blade is curved to maximize damage. The
                    curvature of the blade ensures maximum contact with the
                    target.
                  </p>
                </Col>
                <Col xs={4}>
                  <Tilt>
                    <img
                      src="https://i.imgur.com/TWipSPc.png"
                      className="content-image"
                    />
                  </Tilt>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="yumi" className="bg-dark py-4">
        <h2 className="text-center pt-3 text-light">Yumi</h2>
        <Container>
          <Row>
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://i.imgur.com/i67eev9.png"
                  className="content-image"
                />
              </Tilt>
            </Col>
            <Col>
              <p className="text-light">
                Though the most famous of the samurai weapons was the katana,
                they used many other weapons, including the longbow, or{" "}
                <i>yumi</i>. They were generally around 8 feet tall, and made of
                wood, laminated with bamboo. Initially, bows were used for
                hunting, though they later began to be used for battles. Samurai
                took great pride in their archery: they would practice for hours
                to perfect their archery on horseback. Their arrows were also
                perforated, which created a whistling sound that was believed to
                call the <i>kami</i> (Shinto nature spirits) to witness their
                great deeds. They used varied arrows, some of which would pierce
                through armor, knock someone out (to take as prisoner), or kill
                horses to disable cavalry.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <hr></hr>
      <section id="blades">
        <h2 className="text-center pt-3">Short Swords</h2>
        <Container>
          <Row className="mt-4">
            <Col>
              <p>
                Samurai also used a variety of other daggers, the two most
                prominent of which were the <i>wakizashi</i> and the{" "}
                <i>tanto</i> . Neither blade was used more frequently than the
                katana, a samurai’s life and soul, but they were both potent
                backup weapons. They were used for close quarters fighting, when
                a katana was too large to be used in a small space. It was also
                used if required at a friend’s house, the only time samurai were
                without their katana. They were both short swords, with
                differing lengths depending on their needs. The multiple blades
                were also a status symbol, since samurai were the only ones
                allowed to carry more than one blade. The set of the wakizashi
                and katana made a pair called the <i>daisho</i>, which all
                samurai carried.
              </p>
            </Col>
            <Col xs={12} lg={3} className="text-center mb-4">
              <Tilt>
                <img
                  src="https://imgur.com/lI1TtIj.png"
                  className="content-image"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
export default Weapons;
