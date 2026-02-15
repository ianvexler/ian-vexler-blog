const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
        <p className="text-sm text-text-muted m-0 order-2 sm:order-1">
          {currentYear} — Ian Vexler
        </p>
      </div>
    </footer>
  );
};

export default Footer;
