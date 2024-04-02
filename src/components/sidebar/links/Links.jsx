import React from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const items = [
    "Home",
    // "About",
    "Experience",
    "Services",
    "Portfolio",
    "Contact",
  ];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={index}
          variants={itemsVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
