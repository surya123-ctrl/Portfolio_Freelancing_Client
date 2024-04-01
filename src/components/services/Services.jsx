import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Services.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Technical_Writing from "../../assets/Technical_Writing.jpg";
import Resume from "../../assets/Resume.jpg";
import Interview from "../../assets/Interview.jpg";
import Product from "../../assets/Product.jpg";
import Social_Media from "../../assets/Social_Media.jpg";
import Blog from "../../assets/Blog.jpg";
import Content_Writing from "../../assets/Content_Writing.jpg";
import Assignment from "../../assets/Assignment.jpg";
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  visible: {
    opacity: 1,
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const servicesArray = [
    {
      title: "Technical Writing",
      body: "Explain complex technical topics in a clear and concise way with my technical writing services.",
      image: Technical_Writing,
    },
    {
      title: "Resume Services",
      body: "Stand Out from the Crowd: Boost Your Resume with Customized Keywords Tailored to Your Industry.",
      image: Resume,
    },
    {
      title: "Interview Preparations",
      body: "Unlock Your Interview Success: Customized coaching services to boost your confidence and conquer job interviews.",
      image: Interview,
    },
    {
      title: "Product Descriptions",
      body: "Boost your e-commerce sales with persuasive product descriptions that highlight the unique features of your products.",
      image: Product,
    },
    {
      title: "Social Media Content",
      body: "Maximize your social media engagement with attention-grabbing copy and visually stunning graphics.",
      image: Social_Media,
    },
    {
      title: "Blog Posts",
      body: "Engage your audience and drive traffic to your website with high-quality, SEO-optimized blog posts.",
      image: Blog,
    },
    {
      title: "Career in Content Writing",
      body: "Master the Art of Content Writing: Strategies, Skills, and Opportunities for a Fulfilling Career.",
      image: Content_Writing,
    },
    {
      title: "Assignments Completion",
      body: "Save your precious time with our custom-made assignments, crafted with care and delivered promptly, always plagiarism-free.",
      image: Assignment,
    },
  ];
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Carousel
          autoPlay
          dynamicHeight
          infiniteLoop
          className="carousel"
          showIndicators={false}
        >
          {servicesArray.map((service, index) => (
            <div key={index} className="carousel-container">
              <div className="carousel-text">
                <h1>{service.title}</h1>
                <p>{service.body}</p>
                <button>Contact</button>
              </div>
              <img src={service.image} alt={service.title} />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Services;
