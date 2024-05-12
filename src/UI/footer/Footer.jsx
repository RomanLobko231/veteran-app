import { Link } from 'react-router-dom';
import cl from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={cl.footer}>
        <h2>
            Romny Veteran Support
        </h2>
        <nav className={cl.navigation}>
            <Link to="/main">Головна</Link>
            <Link to="/news">Новини & iнформацiя</Link>
            <Link to="/careers">Кар'єра</Link>
        </nav>
        <p>© Copyright 2024</p>
        <p>Made by Roman Lobko</p>
    </footer>
  );
};

export default Footer;
