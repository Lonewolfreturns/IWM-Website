import React from "react";
import { motion } from "framer-motion";

const profileData = {
  firstName: "Jane",
  lastName: "Doe",
  photo: "https://via.placeholder.com/150",
  title: "Senior Research Scientist",
  bio: "Jane is a passionate scientist focused on climate change and soil health. She has over 10 years of experience in field research and data analysis.",
  experience: [
    { year: "2023–Present", role: "Lead Scientist at GreenEarth Lab" },
    { year: "2018–2023", role: "Research Fellow at ClimateX Institute" },
    { year: "2015–2018", role: "Environmental Analyst at EcoWatch" },
  ],
  accomplishments: [
    "Published 20+ peer-reviewed papers",
    "Recipient of the 2022 Global Soil Research Award",
    "TEDx speaker on sustainable agriculture",
  ],
  projects: {
    current: ["SmartSoil Sensor Network", "AI-Driven Emissions Monitoring"],
    past: ["Urban Carbon Mapping", "Precision Agriculture Initiative"],
  },
  blogs: [
    {
      title: "Understanding Soil Carbon Sequestration",
      date: "June 20, 2025",
    },
    {
      title: "Innovations in Sensor Technology",
      date: "June 10, 2025",
    },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Profile = () => {
  const {
    firstName,
    lastName,
    photo,
    title,
    bio,
    experience,
    accomplishments,
    projects,
    blogs,
  } = profileData;

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 text-white bg-gradient-to-br from-indigo-900 via-slate-900 to-black overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={photo}
            alt={`${firstName} ${lastName}`}
            className="rounded-full w-44 h-44 object-cover shadow-lg border-4 border-indigo-500/50"
            whileHover={{ scale: 1.05 }}
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {firstName} {lastName}
            </h2>
            <p className="text-lg text-blue-300 mt-2">{title}</p>
            <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
              {bio}
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-blue-300 mb-6">
            Experience Timeline
          </h3>
          <ul className="space-y-4 text-gray-200">
            {experience.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:items-center"
              >
                <span className="font-semibold text-indigo-400 w-36">
                  {item.year}
                </span>
                <span className="text-gray-300">{item.role}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-6">
            Key Accomplishments
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {accomplishments.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg p-8 shadow-lg hover:bg-gradient-to-br from-blue-600/20 to-purple-700/20 transition-all duration-500">
            <h4 className="text-xl font-semibold mb-3 text-blue-300">
              Currently Working On
            </h4>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              {projects.current.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg p-8 shadow-lg hover:bg-gradient-to-br from-purple-600/20 to-pink-600/20 transition-all duration-500">
            <h4 className="text-xl font-semibold mb-3 text-pink-300">
              Past Projects
            </h4>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              {projects.past.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Blogs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-blue-300 mb-6">
            Related Blog Posts
          </h3>
          <ul className="space-y-4">
            {blogs.map((blog, i) => (
              <li
                key={i}
                className="border-l-4 border-indigo-500 pl-4 text-gray-200"
              >
                <p className="font-semibold">{blog.title}</p>
                <span className="text-sm text-gray-400">{blog.date}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
