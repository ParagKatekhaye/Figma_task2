import Image from "react-bootstrap/Image";
import "./Interface.css";

const Interface = () => {
  return (
    <div
      className="container p-4 rahul"
      style={{
        textAlign: "center",

        color: "white",
      }}
    >
      <h1>Intuitive interface</h1>
      <p>
        Celebrate the joy of accomplishment with an app <br /> designed to track
        your progress, motivate your efforts, <br /> and celebrate your
        successes, one task at a time.
      </p>

      <div>
        <Image className="img-fluid" src="Appnight.png" />
      </div>
    </div>
  );
};
export default Interface;
