import { useState } from "react";
import cl from "./Navbar.module.css"
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const rootClasses = [cl.navbar]
    const navLinks = [cl.nav__links]
    const navbar_text = [cl.navbar__text]

    const navigate = useNavigate()

    if (visible) {
        rootClasses.push(cl.active);
        navLinks.push(cl.active)
        navbar_text.push(cl.active)
    }

    const handleShowNavbar = () => {
        if (window.innerWidth < 850) setVisible(!visible)
    }
      

  return (
      <nav className={rootClasses.join(" ")}>
        <div className={navbar_text.join(" ")}>
             <h2 onClick={() => {navigate('')}}>Romny Veteran Support</h2>
        </div>
        <FaBars className={cl.nav__icon} onClick={() => setVisible(!visible)}/>
        <nav className={navLinks.join(" ")}>
            <Link to="/main" onClick={handleShowNavbar}>Головна</Link>
            <Link to="/news" onClick={handleShowNavbar}>Новини</Link>
            {/* <Link to="/projects" onClick={handleShowNavbar}>Проекти</Link> */}
            <Link to="/careers" onClick={handleShowNavbar}>Вакансiї</Link>
        </nav>
      </nav>
  );
};

export default Navbar;
