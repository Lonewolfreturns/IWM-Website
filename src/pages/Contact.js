import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 text-white bg-gradient-to-br from-indigo-900 via-slate-900 to-black overflow-hidden">
      {/* Decorative glowing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="relative text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight"
      >
        Contact Us
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-lg"></div>
      </motion.h2>

      {/* Grid Layout */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br from-blue-600/20 to-purple-700/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <h3 className="relative text-2xl font-bold text-blue-300 mb-6">
            Send us a message
          </h3>

          <form className="relative space-y-6 text-gray-200">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 h-40 resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400 text-white"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Location Section */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg p-8 transition-all duration-500 hover:bg-gradient-to-br from-green-600/20 to-blue-700/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <h3 className="relative text-2xl font-bold text-green-300 mb-4">
            Visit Us
          </h3>
          <p className="relative text-gray-200 mb-4">
            Banting Building, 39 Cox Road, <br />
            Truro, Nova Scotia, Canada
          </p>
          <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/20 shadow-inner">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.9620246824147!2d-63.267849684233046!3d45.36636004439342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b59eab274f46ad7%3A0xf0e0f55e383ccfd1!2s39%20Cox%20Rd%2C%20Truro%2C%20NS%20B2N%205E3%2C%20Canada!5e0!3m2!1sen!2sca!4v1720011332504!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          Connect with us
        </h3>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
