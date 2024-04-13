import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hexaware from "./Component/Hexaware/Hexaware.js";
import Header from "./Component/Header/Header.js";
import Logo from "./Component/Logo/Logo.js";
import Interface from "./Component/Interface/Interface.js";
import Question from "./Component/Question/Question.js";
import Instant from "./Component/Instant/Instant.js";
import Footer from "./Component/Footer/Footer.js";
import Navbar from "./Component/Navbar/Navbar.js";
import Getforfree from "./Component/Getforfree/Getforfree.js";
import Top from "./Component/Top/Top.js";

function App() {
  return (
    <div>
      <Top />
      <Getforfree />
      <Navbar />
      <Logo />
      <Hexaware />
      <Header />
      <Interface />
      <Question />
      <Instant />
      <Footer />
    </div>
  );
}

export default App;
