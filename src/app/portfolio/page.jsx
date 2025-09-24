"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Header,
  ProposalCard,
  ProposalMidSection,
  ProjectTabs,
  PortfolioModal,
  PortfolioFooter
} from "../components";
import { porposal } from "../constants";

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

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fixedComponents = [
    <Header key="header" />,
    <ProposalMidSection key="mid" />,
    <ProjectTabs key="tabs" />
  ];

  return (
    <div>
      {fixedComponents.map((Comp, i) => (
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
      {porposal.map((card, i) => (
        <motion.div
          key={i}
          custom={i + fixedComponents.length}
          initial="hidden"
          animate="visible"
          variants={bottomToTop}
        >
          <ProposalCard
            key={i}
            data={card}
            onOpenModal={() => setIsModalOpen(true)}
          />
        </motion.div>
      ))}
      <PortfolioFooter />
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              onClick={() => setIsModalOpen(false)}
            />

            <PortfolioModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
