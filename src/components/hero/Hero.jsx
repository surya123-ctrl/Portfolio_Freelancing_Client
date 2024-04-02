import React from "react";
import "./Hero.scss";
import HeroImg from "../../assets/HeroImg.jpeg";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-520%",
    transition: {
      repeat: Infinity,
      repeatType: "Mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Divyanshi Rawat</motion.h2>
          <motion.h1 variants={textVariants}>
            Executive Manager & Content Writer
          </motion.h1>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="buttons"
          >
            <motion.button
              variants={textVariants}
              className="button"
              initial="initial"
              animate="animate"
              onClick={() => scrollToSection("Portfolio")}
            >
              Portfolio
            </motion.button>
            <motion.button
              variants={textVariants}
              initial="initial"
              animate="animate"
              onClick={() => scrollToSection("Contact")}
              className="button"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Content Creator Research Analyst
      </motion.div>
      <div className="imageContainer">
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  );
};

export default Hero;
