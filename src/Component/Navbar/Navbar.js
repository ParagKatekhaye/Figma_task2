import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container moti">
      <Container>
        <Row className="py-2 justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <p className="p-2" style={{color:'gray'}}>
              Version 2.0 is here
              <Image className="m-2 img-fluid " src="./Readmore.png" />
              <Image src="./Icons.png" className="img-fluid" />
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h1 style={{ fontSize: "6.75rem", color:'white' }}>One Task</h1>
            <h1 style={{ fontSize: "6.75rem", color:'white' }}>at a Time</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <p style={{ color:'white' }}>
              Celebrate the joy of accomplishment with an <br /> app designed to
              track your progress, motivate <br />
              your efforts, and celebrate your successes.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={6} md={3} className="text-center d-none d-md-block">
            <Image
              className="img-fluid"
              src="./cursor.png"
              style={{ width: "100%", maxWidth: "100px", position: "absolute", top: "60%", left: "34%", transform: "translate(-50%, -50%)" }}
            />
          </Col>
          <Col xs={6} md={3} className="text-center d-none d-md-block">
            <Image
              className="img-fluid"
              src="./message.png"
              style={{ width: "100%", maxWidth: "110px", position: "absolute", top: "52%", left: "66%", transform: "translate(-50%, -50%)" }}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <Button
              style={{ backgroundColor: "white", color: "black" }}
              rounded
            >
              Get for free
            </Button>
          </Col>
        </Row>
      </Container>      
    </div>
  );
};

export default Navbar;
