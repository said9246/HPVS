import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; // Example icons from react-icons
import "./components.css";
import { FaTruck } from "react-icons/fa6";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolling = scrollY > 170; // Adjust the threshold as needed
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <nav
        className={`fixed flex flex-row justify-between items-center py-3 px-10  ${
          scrolling ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <Link to={"/"} className="logo" onClick={scrollToTop} >
        
        <img className="logo_image" src="./images/for1.png" alt="" />
        
        {/* <div className="right">
          <p>Holland Private Valuat & Shipping</p>
          <span>

          <h2>HPVS  </h2>          <FaTruck className="truck" />
          </span>
        </div> */}
        </Link>
        <div className={`links ${isMobile ? 'mobile' : ''}`}>
          <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8`}>
            <li>
              <Link onClick={scrollToTop} to="/">Home</Link>
            </li>
            <li>
              <Link  to="/about"onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>About</Link>
            </li>
            <li>
              <Link  to="/services"onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Services</Link>
            </li>
            <li>
              <Link  to="/shipping" onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Shipping </Link>
            </li>
            <li>
              <Link  to="/storage" onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Storage</Link>
            </li>
            <li>
              <Link  to="/track" onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Track</Link>
            </li>
            <li>
              <Link  to="/contact" onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Contact</Link>
            </li>
          </ul>
        </div>
        <Link  to={"/track"} className="trackNowBtn"onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>
          Track Now
        </Link>
        <div className="mobile-menu-icon" onClick={handleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
