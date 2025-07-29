const Footer = () => {
  return (
    <footer className="bg-tech-dark text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Portfolio</div>
          <p className="text-muted-foreground mb-4">
            Building the future, one line of code at a time.
          </p>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Made with ❤️ using React & TypeScript.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;