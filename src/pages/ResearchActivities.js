import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ResearchActivities = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 text-white bg-gradient-to-br from-indigo-900 via-slate-900 to-black overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="relative text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight"
      >
        Research Activities
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-lg"></div>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {/* Projects */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br from-blue-600/20 to-purple-700/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <h3 className="relative text-2xl font-bold text-blue-300 mb-4">
            Projects
          </h3>
          <ul className="relative list-disc list-inside space-y-3 text-gray-200">
            <li>
              <strong>Impacts of long-term biosolids applications</strong> —
              Evaluating the effects on soil health and environmental quality.
            </li>
            <li>
              <strong>
                National digital soil database & spectroscopy library
              </strong>{" "}
              — Building Canada’s unified soil intelligence system.
            </li>
            <li>
              <strong>Composting & bioconversion systems</strong> — Turning
              waste into value-added, sustainable products.
            </li>
            <li>
              <strong>Food loss & waste management</strong> — Reducing waste
              across Canada’s food value chain.
            </li>
          </ul>
        </motion.div>

        {/* Field Infrastructure */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br from-green-600/20 to-blue-700/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <h3 className="relative text-2xl font-bold text-green-300 mb-4">
            Field Infrastructure
          </h3>
          <p className="relative text-gray-200 mb-4">
            Our field research ecosystem supports applied studies in soil,
            environment, and bioresource systems.
          </p>
          <ul className="relative list-disc list-inside space-y-3 text-gray-200">
            <li>
              <strong>Bio-Environmental Engineering Complex</strong> —
              Cutting-edge equipment for biosystem and environmental testing.
            </li>
            <li>
              <strong>Soil Processing Facilities</strong> — Comprehensive soil
              characterization and sampling services.
            </li>
          </ul>
        </motion.div>

        {/* Lab Services */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br from-purple-600/20 to-pink-600/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <h3 className="relative text-2xl font-bold text-purple-300 mb-4">
            Lab & Analytical Services
          </h3>
          <p className="relative text-gray-200 mb-4">
            The Integrated Waste Management (IWM) and Soil Analytical Labs offer
            advanced analytical services for research and industry.
          </p>
          <ul className="relative list-disc list-inside space-y-3 text-gray-200">
            <li>High-precision physical and chemical soil analyses</li>
            <li>Comprehensive nutrient and organic matter testing</li>
            <li>Collaborative and contract-based research support</li>
          </ul>
        </motion.div>

        {/* Open Data Collaborations */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br from-pink-600/20 to-blue-600/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <h3 className="relative text-2xl font-bold text-pink-300 mb-4">
            Open Data Collaborations
          </h3>
          <p className="relative text-gray-200">
            We promote open science and data sharing through collaborative
            networks, fostering innovation and reproducibility in soil and
            environmental research.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResearchActivities;
