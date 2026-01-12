import React, { useState } from "react";
import { motion } from "framer-motion";

const affiliations = [
  {
    name: "Centre for Sustainable Soil Management",
    url: "https://www.sustainablesoils.ca/",
  },
  { name: "Canadian Soil Data Portal", url: "https://soildataportal.ca/" },
  {
    name: "Transforming Climate Action",
    url: "https://www.ofi.ca/programs/transform-climate-action",
  },
  {
    name: "Ecological Engineering Research Group",
    url: "https://www.mcgill.ca/ecoeng/",
  },
  { name: "Compost Council of Canada", url: "https://www.compost.org/" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! Your submission has been received.");
  };

  return (
    <div className="relative min-h-screen text-white font-sans bg-gray-950 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-cyan-900 via-gray-900 to-purple-900 overflow-hidden">
        {/* Flowing animated background layer */}
        <div className="absolute inset-0 animate-curtain bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.15),transparent_70%),radial-gradient(circle_at_70%_70%,rgba(255,0,255,0.15),transparent_70%)] bg-[length:200%_200%] blur-3xl"></div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl px-6"
        >
          <div className="flex flex-col items-center justify-center text-center">
            {/* Header Section */}
            <div className="mb-12">
              <h1
                className="text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent 
  drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)] animate-gradientFlow 
  leading-[1.2] tracking-tight pb-4"
              >
                Innovative Waste Management Research Program
              </h1>
            </div>

            {/* Paragraph Section */}
            <div className="max-w-3xl mb-4">
              <p className="text-xl text-gray-200 leading-relaxed">
                Pioneering sustainable waste solutions through data, technology,
                and collaboration.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg transition">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-lg transition">
              Join Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="relative py-24 w-full text-center bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-6 animate-borderGlow">
            Mission Statement
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            We aim to revolutionize waste management by integrating
            environmental science, technology, and sustainability — creating a
            circular system that transforms waste into opportunity for a cleaner
            planet.
          </p>
        </motion.div>
      </section>

      {/* STUDY AREA SECTION */}
      <section className="w-full relative py-24 text-center bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-8"
        >
          <h2 className="text-4xl font-bold text-violet-300 mb-10 animate-borderGlow animate-pulseGlow">
            What We Study
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "Waste valorization and circular economy systems",
              "Soil enhancement through organic amendments",
              "Advanced composting and microbial dynamics",
              "Life-cycle analysis of waste processes",
              "AI and IoT integration in waste tracking",
              "Bioenergy and carbon recovery from waste materials",
            ].map((topic, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/10 border border-violet-400/30 rounded-xl p-6 backdrop-blur-lg hover:border-violet-300 hover:bg-white/20 transition"
              >
                <p className="text-gray-100 text-base">{topic}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AFFILIATIONS SECTION */}
      <section className="w-full py-24 text-center bg-gradient-to-b from-gray-900 via-cyan-950 to-blue-950">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-8"
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-10 animate-borderGlow">
            Affiliations
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {affiliations.map((aff) => (
              <a
                key={aff.name}
                href={aff.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 border border-cyan-400/40 rounded-xl text-cyan-200 font-medium hover:bg-cyan-400/20 transition backdrop-blur-lg"
              >
                {aff.name}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RECRUITMENT SECTION */}
      <section className="relative py-24 w-full text-center bg-gradient-to-tr from-pink-950 via-purple-950 to-indigo-950">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-6 backdrop-blur-xl bg-white/10 border border-pink-400/30 rounded-2xl shadow-xl p-10"
        >
          <h2 className="text-4xl font-bold text-pink-300 mb-4 animate-gradientShift animate-borderGlow">
            Recruitment
          </h2>
          <p className="text-gray-200 mb-8">
            Join our mission to create sustainable systems for the future.
            Submit your details below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/10 border border-pink-400/30 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/10 border border-pink-400/30 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <textarea
              name="interest"
              placeholder="Your Research Interests..."
              value={formData.interest}
              onChange={handleChange}
              required
              rows={4}
              className="bg-white/10 border border-pink-400/30 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="text-white border border-pink-400/30 bg-white/10 rounded-lg px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-pink-600 file:text-white file:px-4 file:py-2 hover:file:bg-pink-700"
            />
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold py-3 rounded-lg hover:from-pink-500 hover:to-violet-500 transition-all shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </section>

      {/* ANIMATION STYLES */}
      <style>{`
        /* Flowing "curtain to the wind" animation for hero background */
        @keyframes curtainFlow {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-curtain {
          animation: curtainFlow 18s ease-in-out infinite alternate;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradientFlow {
          background-size: 200% 200%;
          animation: gradientFlow 12s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        .animate-pulseGlow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        @keyframes borderGlow {
          0%, 100% { text-shadow: 0 0 15px rgba(0,255,255,0.4); }
          50% { text-shadow: 0 0 25px rgba(255,0,255,0.6); }
        }
        .animate-borderGlow {
          animation: borderGlow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
