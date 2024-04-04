import React from "react";
import "./Navbar.scss";
import Instagram from "../../assets/Instagram.jpg";
import LinkedIn from "../../assets/LinkedIn.png";
import Logo from "../../assets/logo.jpeg";
import ResearchGate from "../../assets/ResearchGate.png";
import Orcid from "../../assets/Orcid.png";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 2 }}
        >
          {/* DR */}
          <img src={Logo} alt="Instagram" />
        </motion.span>
        <div className="social">
          <a
            href="https://orcid.org/0009-0004-9579-3580"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Orcid} alt="Instagram" />
          </a>
          <a
            href="https://www.instagram.com/div_.rawat/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/divyanshi-rawat-dr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Divyanshi-Rawat-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ResearchGate} alt="ResearchGate" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
