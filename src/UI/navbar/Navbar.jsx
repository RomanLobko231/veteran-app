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
        if (window.innerWidth < 768) setVisible(!visible)
    }
      

  return (
      <nav className={rootClasses.join(" ")}>
        <div className={navbar_text.join(" ")}>
             <span onClick={() => {navigate('')}}>Veteran Help</span>
        </div>
        <FaBars className={cl.nav__icon} onClick={() => setVisible(!visible)}/>
        <nav className={navLinks.join(" ")}>
            <Link to="/main" onClick={handleShowNavbar}>Головна</Link>
            <Link to="/careers" onClick={handleShowNavbar}>Вакансii</Link>
            <Link to="/events" onClick={handleShowNavbar}>Подii</Link>
        </nav>
      </nav>
  );
};

export default Navbar;
