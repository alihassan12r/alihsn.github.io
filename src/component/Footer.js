import '../style/sass/pages/_footer.scss';

const Footer = function () {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <p className="container">{currentYear} © Ali Hassan</p>
      </div>
    </footer>
  );
};

export default Footer;
