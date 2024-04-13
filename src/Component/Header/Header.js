import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="Container" style={{ backgroundColor: "black" }}>
      <Row className="container" style={{ textAlign:'-webkit-center' }}>
        <Col md={4} sm={12}>
          <Card className="mb-3"
            style={{
              width: "78%",
              backgroundColor: "#0D0D0D",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card.Img
              className="rounded-3"
              variant="top"
              src="./Frame 21.jpg"
              style={{ width: "25%" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>
                Integration ecosystem
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="mb-3"
            style={{
              width: "78%",
              backgroundColor: "#0D0D0D",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card.Img
              className="rounded-3"
              variant="top"
              src="./Frame 21.jpg"
              style={{ width: "25%" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>
                Goal setting and tracking
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Define and track your goals, breaking down objectives into
                achievable tasks to keep your targets in sight.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="mb-3"
            style={{
              width: "78%",
              backgroundColor: "#0D0D0D",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card.Img
              className="rounded-3"
              variant="top"
              src="./Frame 21.jpg"
              style={{ width: "25%" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>
                Secure data encryption
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                With end-to-end encryption, your data is securely stored and
                protected from unauthorized access.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
