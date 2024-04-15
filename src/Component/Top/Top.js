import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './Top.css'

const Top = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* <div
            className="container pop"
            style={{
             
              height: 50,
              textAlign: "center",
            }}
          >
            <span className="d-none d-md-inline" style={{ fontSize: 13 }}>
              This page is included in a free SaaS Website Kit.
              <span>
                {" "}
                View the complete Kit
                <span>
                  <Image src="./Arrow.png" className="img-fluid" />
                </span>
              </span>
            </span>
          </div> */}

        <div className="container pop" style={{ height: 50,textAlign: "center"}}>
         <p>
         <span className="d-none d-md-inline">This page is included in a free SaaS Website Kit.</span>
         <span>View the complete Kit <Image src="./Arrow.png" className="img-fluid" /> </span> 
        </p>
        </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Top;
