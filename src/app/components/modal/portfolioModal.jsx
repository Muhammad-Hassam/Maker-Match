"use client";
import { motion } from "framer-motion";
import {
  PortfolioHeader,
  PortfolioMasonry,
  PortfolioNav
} from "../../components";

export default function PortfolioModal({ onClose }) {
  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-full md:w-[70%] bg-white shadow-lg z-50 p-2 md:p-6 overflow-y-auto"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <PortfolioHeader onClose={onClose} />
      <PortfolioNav />
      <PortfolioMasonry />
    </motion.div>
  );
}
