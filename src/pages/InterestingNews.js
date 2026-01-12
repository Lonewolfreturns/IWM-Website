import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const newsItems = [
  {
    title: "Soil Health Symposium 2025 Announced",
    description:
      "Our research group will be presenting new findings on sustainable soil practices at the upcoming national symposium.",
    source: "Read more",
    link: "#",
    color: "from-blue-600/20 to-purple-700/20",
  },
  {
    title: "Canadian Soil Data Network Expands",
    description:
      "A collaborative effort adds new datasets to the national soil spectroscopy library, enhancing open research access.",
    source: "View article",
    link: "#",
    color: "from-green-600/20 to-blue-700/20",
  },
  {
    title: "Dalhousie Researchers Lead Food Waste Initiative",
    description:
      "An interdisciplinary team launches a project to develop scalable food waste reduction models across Nova Scotia.",
    source: "More details",
    link: "#",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Global Soil Week Highlights Climate-Smart Agriculture",
    description:
      "International experts shared strategies to balance soil productivity with ecosystem preservation.",
    source: "Learn more",
    link: "#",
    color: "from-pink-600/20 to-blue-600/20",
  },
  {
    title: "New Equipment Installed at IWM Laboratory",
    description:
      "State-of-the-art analytical tools enhance our capacity for environmental and bioresource research.",
    source: "See announcement",
    link: "#",
    color: "from-yellow-600/20 to-orange-700/20",
  },
];

const InterestingNews = () => {
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
        Interesting News
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-lg"></div>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className={`relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br ${item.color}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl`}
            ></div>
            <h3 className="relative text-2xl font-bold text-blue-300 mb-4">
              {item.title}
            </h3>
            <p className="relative text-gray-200 mb-4">{item.description}</p>
            <a
              href={item.link}
              className="relative text-sm text-blue-400 hover:text-blue-200 transition"
            >
              {item.source} →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InterestingNews;
