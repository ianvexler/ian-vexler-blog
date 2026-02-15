const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer border-t border-white/[0.04] py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-white/35 m-0">
          {currentYear} - Ian Vexler
        </p>
      </div>
    </footer>
  );
};

export default Footer;
