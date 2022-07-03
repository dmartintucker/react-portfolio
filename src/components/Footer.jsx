// Stylesheets
import "../styles/Footer.css";

// Image imports
import Dribbble from "../assets/dribbble.svg";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Let's Connect!</h2>
      <p>Get in touch for opportunities or just to say hi! 👋</p>
      <div className="img-links">
        <a href="https://www.linkedin.com/in/dmartintucker" target="_blank" rel="noreferrer noopener">
          <img src={Linkedin} alt="link to linkedin profile" />
        </a>
        <a href="https://www.github.com/dmartintucker" target="_blank" rel="noreferrer noopener">
          <img src={Github} alt="link to github profile" />
        </a>
        <img src={Email} alt="link to email address" />
        <img src={Dribbble} alt="link to dribbble profile" />
      </div>
    </footer>
  );
};

export default Footer;
