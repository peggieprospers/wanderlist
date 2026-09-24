import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} WanderList. Built with React.</p>
    </footer>
  );
}

export default Footer;