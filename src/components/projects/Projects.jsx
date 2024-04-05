import React, { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ResearchPaper from "../../assets/ResearchPaper.png";
import Content from "../../assets/Content.png";
import Social from "../../assets/Social.png";
import Assignment from "../../assets/Assignment.png";
const PortfolioItems = [
  {
    id: 1,
    title:
      "Laboratory Cultivation of Microgreens as Super Nutritional Food Supplements",
    heading:
      "Review Paper on Essential Oil Based Therapies as an Effective Weapon Against Diseases.",
    content:
      "Conducted a systematic literature review of clinical studies regarding the use of essential oil based therapies as an effective weapon against diseases, surveying over 40 papers and identifying major areas of focus. Resulted in the compilation of new evidence base for the potential efficacy of essential oil based therapies.",
    image: ResearchPaper,
    link: "https://drive.google.com/file/d/1nsSYrJNA--V4INt28Em29Lf3a4JxE-Ro/view",
  },
  {
    id: 2,
    title: "Honey Bee-Derived Cosmetics and Skincare Products",
    content:
      " Researched and developed cosmetics and skincare products utilizing honey bee wax, propolis, honey, and bee venom. Conducted laboratory studies to analyze the properties of honey bee products and their effects on skin. Investigated potential side effects of direct application.",
    image: Content,
    link: "https://drive.google.com/drive/folders/1AEzkxhdUx7q3E-Y4RKByt59UiT-xWH7d",
  },
  {
    id: 3,
    title: "Field Trials of Okra (Abelmoschus esculentus) Growth",
    content:
      "Conducted field trials to optimize growth conditions for okra plants. Studied various factors including seed rate, spacing, seed treatment, optimal temperature, and fertilizer dosage. Implemented experimental designs to assess the impact on plant yield and health under natural conditions.       ",
    image: Social,
    link: "https://drive.google.com/drive/folders/1TlsKCME_dRkZdIImThyPVxGC2PDVnjjx",
  },
  {
    id: 4,
    title: "Microbial Growth",
    content:
      " Implemented laboratory techniques and incubation methods to cultivate microbes from diluted milk samples. Conducted at 37°C for 48 hours, resulting in significant microbial colony growth.",
    image: Assignment,
    link: "https://drive.google.com/drive/folders/1GqdN4OQQB-O5rJJxka3WFBerYucunM3y",
  },
  {
    id: 5,
    title: "Analysis in Milk Samples",
    content:
      " Analyzed microbial counts to understand bacterial composition and assess milk quality. This project provided hands-on experience in microbiological techniques and data analysis.",
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
          {/* <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div> */}
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            {/* <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>SEE DEMO</button>
            </a> */}
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
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {PortfolioItems.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
