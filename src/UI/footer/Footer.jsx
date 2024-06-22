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
            <Link to="/news">Корисна iнформацiя</Link>
            <Link to="/careers">Кар'єра</Link>
        </nav>
        <a className={cl.link} href='https://roman-lobko.netlify.app/'>Made by Roman Lobko</a>
    </footer>
  );
};

export default Footer;
