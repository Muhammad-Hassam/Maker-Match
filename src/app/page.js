"use client";
import { motion } from "framer-motion";
import { Header, ProductCard } from "./components";
import { products } from "./constants";

const bottomToTop = {
  hidden: { y: 60, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: i * 0.2
    }
  })
};

export default function Home() {
  const components = [
    <Header key="header" button />,
    <div
      key="cards"
      className="flex flex-wrap mt-[3%] md:mt-[0%] justify-center md:justify-start"
    >
      {products.map((data, i) => {
        return <ProductCard data={data} key={i} />;
      })}
    </div>
  ];

  return (
    <div>
      {components.map((Comp, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={bottomToTop}
        >
          {Comp}
        </motion.div>
      ))}
    </div>
  );
}
