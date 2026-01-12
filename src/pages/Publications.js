import React from "react";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Advances in Soil Monitoring Techniques",
    year: "2024",
    image: "/publications/soil.jpg",
    link: "/documents/soil-monitoring.pdf",
    authors: ["Dr. Smith", "A. Kolla"],
  },
  {
    title: "AI and Emission Tracking",
    year: "2023",
    image: "/publications/ai-emissions.jpg",
    link: "https://example.com/publication/ai-emission-tracking",
    authors: ["J. Chen", "A. Kolla"],
  },
  {
    title: "Sensor Deployment in Arctic Environments",
    year: "2022",
    image: "/publications/arctic.jpg",
    link: "#",
    authors: ["M. Li", "A. Kolla"],
  },
];

const mediaStories = [
  {
    title: "Long-term Biosolids Applications",
    image: "/media/biosolids.jpg",
    summary:
      "Exploring sustainable methods for biosolids application and their impact on long-term soil health.",
  },
  {
    title: "Food Loss and Waste",
    image: "/media/foodwaste.jpg",
    summary:
      "Collaborative efforts to measure, reduce, and repurpose food loss and waste through smart sensors and data analytics.",
  },
  {
    title: "Greenhouse Gas Emissions",
    image: "/media/emissions.jpg",
    summary:
      "Sensor-based approaches to track and mitigate greenhouse gas emissions from agricultural and urban systems.",
  },
  {
    title: "Whale Composting and Skeleton Preservation",
    image: "/media/whale.jpg",
    summary:
      "Documenting the innovative process of whale composting and 3D skeletal preservation, showcasing science, art, and sustainability.",
    links: [
      "https://ingeniumcanada.org/channel/articles/glacier-the-whale-skeleton-composting-and-3d-modeling",
      "https://ingeniumcanada.org/channel/articles/majestic-giants-getting-to-know-the-north-atlantic-right-whale",
      "https://ingeniumcanada.org/channel/articles/glacier-the-whale-a-case-study-in-the-decline-of-the-north-atlantic-right-whale",
      "https://sketchfab.com/3d-models/skeleton-north-atlantic-right-whale-5c8664c56f9a4cf3ae6d9b8ec33b8dba",
      "https://www.dal.ca/dept/facilities/campus-development/projects/centre-for-marine-biodiversity.html",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Publications = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#090E2A] via-[#0C163D] to-[#1E1B4B] py-24 px-6 text-gray-200">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg">
            Publications & Media
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our research achievements, innovative projects, and
            real-world media features showcasing our scientific impact.
          </p>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-semibold text-center text-indigo-300">
            Publications & Presentations
          </h2>

          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-indigo-500/40 flex flex-col justify-between h-full"
              >
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-indigo-200 mb-1 min-h-[3rem]">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">({pub.year})</p>
                  <p className="text-sm text-gray-300 italic mb-6">
                    {pub.authors.join(", ")}
                  </p>
                  <div className="flex-grow" />
                </div>
                <div className="p-6 pt-0 pb-4">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full text-sm font-semibold px-5 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:opacity-90 transition"
                  >
                    View Publication →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-semibold text-center text-indigo-300">
            Media Features & Stories
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto">
            From sustainable soils to whale preservation, our work bridges
            technology, ecology, and storytelling.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {mediaStories.map((story, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/40 flex flex-col justify-between h-full"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-indigo-200 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 flex-grow">
                    {story.summary}
                  </p>
                </div>

                {story.links && (
                  <div className="p-6 pt-0 pb-4 flex flex-wrap gap-2">
                    {story.links.map((link, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-md hover:opacity-90 transition"
                      >
                        View Story {i + 1}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
