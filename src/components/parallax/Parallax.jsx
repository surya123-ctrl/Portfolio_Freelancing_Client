import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Planets from "../../assets/planets.png";
import Sun from "../../assets/sun.png";
const Parallax = ({ type }) => {
  const imageSource = type === "services" ? Planets : Sun;
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText, color: "#744141" }}>
        {type === "services"
          ? "SERVICES"
          : type === "portfolio"
          ? "PORTFOLIO"
          : "PROJECTS"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${imageSource})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
