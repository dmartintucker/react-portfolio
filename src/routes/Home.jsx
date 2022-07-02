import React from "react";

// Images
import Babbel from "../assets/babbel.png";
import Ditto from "../assets/ditto.png";
import Mango from "../assets/mango.png";
import Tutorme from "../assets/tutorme.png";

// Stylesheets
import "../styles/Home.css";

// Components
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        {/* HERO SECTION */}
        <section className="flex-section" id="section-hero">
          <h2>Hello there!</h2>
          <h1>
            Hi, I'm Daniel.
            <br />I design, create, build &amp; write.
          </h1>
          <h5>
            I'm a product designer based in Chicago with experience in delivering end-to-end UX/UI design for software
            products. I'm passionate about improving the lives of others through design and am constantly looking to
            learn new things everyday.
          </h5>
        </section>

        {/* HERO SECTION */}
        <section className="flex-section" id="section-work">
          <h2>Recent Work</h2>

          <div className="grid-container">
            <div className="img-container">
              <img src={Ditto} alt="" />
            </div>

            <div className="img-container">
              <img src={Mango} alt="" />
            </div>

            <div className="img-container">
              <img src={Babbel} alt="" />
            </div>

            <div className="img-container">
              <img src={Tutorme} alt="" />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
