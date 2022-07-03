import React from "react";

// Stylesheets
import "../styles/Home.css";

// Components

// Images
import DanielBanner from "../assets/me-banner.png";

const About = () => {
  return (
    <React.Fragment>
      <main className="container">
        <div className="flex-section" style={{ alignItems: "center" }}>
          <img style={{ width: "min(100%, 480px)" }} src={DanielBanner} alt="" />
        </div>
        <section className="flex-section">
          <h2>A little about me</h2>
          <p>
            I'm a jack-of-many-trades, master-of-some when it comes to what I can do. I taught myself design, front-end
            development, analytics, and data science after I stepped into industry, and I've been learning everything I
            can ever since.
          </p>
          <p>
            I have a handful of degrees in world languages, linguistics, and applied linguistics (teaching methods for
            foreign languages), and I've put this knowledge to use as a product creator and a critic of existing
            language learning apps.
          </p>
        </section>
        <section className="flex-section">
          <h2>my values</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3>💪 High social impact</h3>
            <p>
              I thrive on high social impact opportunities. A vision and mission that resonate with me will get me up
              every morning, and help me sleep well at night.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3>🧠 Always be learning</h3>
            <p>
              I always wanted to learn how to design apps. So I did. I always wanted to build my own website. So I did.
              I always wanted to build an app to help people learn less-commonly-taught languages. So I did. I'm very
              goal-oriented, and when I make a goal for myself, I'll do my best to pick up the skills or learn the tech
              necessary for achieving it.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3>👐 Embrace the chaos</h3>
            <p>
              I've only ever worked for startups or young companies with less than 50 colleagues. One of the biggest
              joys that comes from working in ecosystems like these is the potential for exploration and testing out new
              ideas to see how sticky they might be.
            </p>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default About;
