const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer py-4">
      <div className="container text-center">
        <p className="footer-copyright mb-0">
          © {currentYear} Ian Vexler
        </p>
      </div>
    </footer>
  );
};

export default Footer;
