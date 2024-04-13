import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "./Instant.css";

const Instant = () => {
  return (
    <div
      className="container don"
      style={{
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "15%",
          marginRight: "auto",
          position: "relative",
          top: 80,
          left: 250,
          width: 180,
        }}
      >
        <Image className="img-fluid d-none d-md-block" src="./emojistar.png" />
      </div>

      <h1>Get instant access</h1>
      <p className="container p-4">
        Celebrate the joy of accomplishment with an app designed <br />
        to track your progress and motivate your efforts.
      </p>

      <div>
        <input
          className="m-3"
          style={{
            borderRadius: "20px",
            backgroundColor: "#131413",
            padding: "7px",
            border: "none",
            outline: "none",
          }}
          type="text"
          placeholder="name@gmail.com"
        />

        <Button style={{ backgroundColor: "white", color: "black" }} rounded>
          Get Access
        </Button>
      </div>

      <div
        style={{
          width: "15%",
          marginLeft: "auto",
          position: "relative",
          bottom: 150,
          right: 200,
          width: 200,
        }}
      >
        <Image className="img-fluid d-none d-md-block" src="./helix.png" />
      </div>
    </div>
  );
};
export default Instant;