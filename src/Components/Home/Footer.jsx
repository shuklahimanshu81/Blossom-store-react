import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="blossom-footer">
        <ul className="quick-link-list">
          <li className="quick-link-item">
            <Link to={"/"}> About Us </Link>
          </li>
          <li className="quick-link-item">
            <Link to={"/"}> Terms & Conditions </Link>
          </li>
          <li className="quick-link-item">
            <Link to={"/"}> Privacy policy </Link>
          </li>
        </ul>
        <ul className="social-media">
          <li className="social-media-item">
            <a href="https://github.com/shuklahimanshu81"> Github </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.linkedin.com/in/the-developer-dude/">
              LinkedIn
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://twitter.com/Developer__dude"> Twitter </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
