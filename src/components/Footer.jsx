import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer bg-gray">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="logo-footer"></img>
        <div className="footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          <div>
            <a className="footer-item" to="/">
              Home
            </a>
            <a className="footer-item" to="/about">
              About
            </a>
            <a className="footer-item" to="/menu">
              Menu
            </a>
            <a className="footer-item" to="/reservations">
              Reservations
            </a>
            <a className="footer-item" to="/order-online">
              Order Online
            </a>
            <a className="footer-item" to="/login">
              Login
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item"> 123 Citrus Lane</p>
          <p className="footer-item"> 123-456-7890</p>
          <p className="footer-item"> little.lemon@lemon.com</p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA LINKS</p>
          <a
            className="footer-item"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="footer-item"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-item"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
