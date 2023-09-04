import "./Footer.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-heading">Footer</h1>
      <hr className="category-line" />
      <div className="footer-flex">
        <div className="footer-link-container ">
          <a href="https://github.com/Abhisek-panda" className="footer-link">
            <FaGithub className="footer-icons" />
          </a>
          <a href="https://twitter.com/abhisek_abhi" className="footer-link">
            <FaTwitter className="footer-icons" />
          </a>
          <a href="/" className="footer-link">
            <FaLinkedin className="footer-icons" />
          </a>
        </div>
        <p className="footer-para">
          Made By
          <span className="footer-span">
            <a
              href="https://abhisek-panda.netlify.app/"
              className="footer-span-link"
            >
              Abhisek
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
