import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ResearchPaper from "../../assets/ResearchPaper.png";
import Content from "../../assets/Content.png";
import Social from "../../assets/Social.png";
import Assignment from "../../assets/Assignment.png";
const PortfolioItems = [
  {
    id: 1,
    title: "Publications",
    heading:
      "Review Paper on Essential Oil Based Therapies as an Effective Weapon Against Diseases.",
    content:
      "Conducted a systematic literature review of clinical studies regarding the use of essential oil based therapies as an effective weapon against diseases, surveying over 40 papers and identifying major areas of focus. Resulted in the compilation of new evidence base for the potential efficacy of essential oil based therapies.",
    image: ResearchPaper,
    link: "https://drive.google.com/file/d/1nsSYrJNA--V4INt28Em29Lf3a4JxE-Ro/view",
  },
  {
    id: 2,
    title: "Content Samples",
    heading:
      "Review Paper on Essential Oil Based Therapies as an Effective Weapon Against Diseases.",
    content:
      "Looking for fresh ideas? Check out some of my content and see what sparks your imagination! ",
    image: Content,
    link: "https://drive.google.com/drive/folders/1AEzkxhdUx7q3E-Y4RKByt59UiT-xWH7d",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    heading:
      "Review Paper on Essential Oil Based Therapies as an Effective Weapon Against Diseases.",
    content:
      "When it comes to choosing a writing service, it's important to know that you're working with someone who has experience and a proven track record of delivering quality content. ",
    image: Social,
    link: "https://drive.google.com/drive/folders/1TlsKCME_dRkZdIImThyPVxGC2PDVnjjx",
  },
  {
    id: 4,
    title: "Assignment Samples",
    heading:
      "Review Paper on Essential Oil Based Therapies as an Effective Weapon Against Diseases.",
    content:
      "Discover the level of excellence that I bring to every project by browsing through my portfolio of past assignments, which have consistently exceeded clients' expectations.",
    image: Assignment,
    link: "https://drive.google.com/drive/folders/1GqdN4OQQB-O5rJJxka3WFBerYucunM3y",
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {PortfolioItems.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
