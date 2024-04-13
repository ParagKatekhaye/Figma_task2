import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Logo() {
  return (
    <Container className="container p-4" style={{ backgroundColor: "black" }}>
      <h6 style={{ textAlign: "center" }}>
        Trusted by the world’s most innovative teams
      </h6>
      <Row>
        <Col className="p-4">
          <Image src="./acme.png" />
        </Col>

        <Col className="p-4">
          <Image src="./quantum.png" />
        </Col>

        <Col className="p-4">
          <Image src="./echo.png" />
        </Col>

        <Col className="p-4">
          <Image src="./celestia.png" />
        </Col>

        <Col className="p-4">
          <Image src="./pulse.png" />
        </Col>

        <Col className="p-4">
          <Image src="./apex.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;
