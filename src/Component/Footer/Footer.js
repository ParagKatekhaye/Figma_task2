import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Footer.css';

const Footer = () => {
  return (
    <Container className="container love pt-5 ">
      <Row>
        <Col md={6} sm={12}  style={{ color: "white",textAlign: "center" }}>
          <p>@ 2024 Your Company, Inc. All rights reserved</p>
        </Col>

        <Col md={6} sm={12} style={{ textAlign: "center" }}>
          <Image className="img-fluid m-2" src="./Vector.png" />
          <Image className="img-fluid m-2" src="./insta.png" />
          <Image className="img-fluid m-2" src="./Socials.png" />
          <Image className="img-fluid m-2" src="./pg.png" />
          <Image className="img-fluid m-2" src="./tiktok.png" />
          <Image className="img-fluid m-2" src="./utube.png" />
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
