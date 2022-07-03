import React from "react";
import { Link } from "react-router-dom";

// Images
import Babbel from "../assets/babbel.png";
import Ditto from "../assets/ditto.png";
import Mango from "../assets/mango.png";
import Tutorme from "../assets/tutorme.png";

// Stylesheets
import "../styles/Home.css";

// Components

const Home = () => {
  return (
    <React.Fragment>
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

        {/* WORK SECTION */}
        <section className="flex-section" id="section-work">
          <h2>Recent Work</h2>

          <div className="grid-container">
            <Link className="img-container" to={`/work/ditto`}>
              <img src={Ditto} alt="" />
            </Link>

            <Link className="img-container" to={`/work/mango`}>
              <img src={Mango} alt="" />
            </Link>

            <Link className="img-container" to={`/work/babbel`}>
              <img src={Babbel} alt="" />
            </Link>

            <Link className="img-container" to={`/work/tutorme`}>
              <img src={Tutorme} alt="" />
            </Link>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
