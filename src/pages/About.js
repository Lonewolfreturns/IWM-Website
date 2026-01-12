import React from "react";
import {
  FaUserTie, // 👔 Technical staff
  FaFlask, // 🧪 Postdocs / Research
  FaUserGraduate, // 🎓 Students
  FaUser, // 👤 Default / fallback
  FaAward, // 🏆 Principal Investigator
  FaUsersCog, // ⚙️ Technical Staff (Alumni)
} from "react-icons/fa";

export default function TeamPage() {
  const sections = [
    {
      title: "Principal Investigator",
      members: [
        {
          name: "Dce",
          bio: "Leads the research initiatives on sustainable waste management and bioeconomy.",
        },
      ],
    },
    {
      title: "Postdoctoral Fellows",
      members: [
        {
          name: "Du",
          bio: "Focuses on advanced composting methods using microbial optimization.",
        },
        {
          name: "Dayer",
          bio: "Works on metal contamination control and bioremediation processes.",
        },
        {
          name: "Dto",
          bio: "Develops innovative biochemical recycling pathways for organic waste.",
        },
      ],
    },
    {
      title: "Technical Staff",
      members: [
        {
          name: "Qe",
          bio: "Specializes in laboratory analytics and instrument calibration.",
        },
        {
          name: "Ala",
          bio: "Supports database management and research automation tools.",
        },
      ],
    },
    {
      title: "Doctoral Students",
      members: [
        {
          name: "Zn",
          bio: "Explores waste-derived biochar and its environmental applications.",
        },
        {
          name: "Ltes",
          bio: "Researches circular economy models in municipal waste management.",
        },
        {
          name: "Ae",
          bio: "Focuses on bioenergy production from solid waste.",
        },
        {
          name: "Mn",
          bio: "Analyzes waste policy impacts and sustainability metrics.",
        },
        {
          name: "Krri",
          bio: "Investigates microbial processes in composting.",
        },
        {
          name: "X",
          bio: "Works on modeling decomposition processes in varied environments.",
        },
      ],
    },
    {
      title: "Masters Students",
      members: [
        {
          name: "Nhy",
          bio: "Designs efficient sorting algorithms for recycling automation.",
        },
        {
          name: "Dam",
          bio: "Studies waste segregation efficiency using sensor-based systems.",
        },
        {
          name: "Sjan",
          bio: "Researches the digital transformation of waste tracking systems.",
        },
      ],
    },
    {
      title: "Undergraduate Students",
      members: [
        {
          name: "Sng",
          bio: "Assists in data analysis for composting experiments.",
        },
      ],
    },
    {
      title: "Alumni – Postdoctoral Fellows",
      members: [
        {
          name: "on",
          bio: "Now leading a bioengineering firm focusing on eco-waste solutions.",
        },
        {
          name: "Du",
          bio: "Specialist in soil carbon management postdoctoral research.",
        },
        {
          name: "Cl",
          bio: "Continues research in chemical waste mitigation.",
        },
        {
          name: "Gd",
          bio: "Works in environmental consultancy.",
        },
        {
          name: "Kvi",
          bio: "Researcher in renewable materials development.",
        },
        {
          name: "San",
          bio: "Specializes in landfill gas recovery systems.",
        },
        {
          name: "In",
          bio: "Investigates marine plastic waste degradation.",
        },
        {
          name: "Grki",
          bio: "Leads sustainability projects in the private sector.",
        },
      ],
    },
    {
      title: "Alumni – Technical Staff",
      members: [
        {
          name: "Gaai",
          bio: "Now managing technical operations at an environmental lab.",
        },
        {
          name: "Ryl",
          bio: "Technical officer in waste system maintenance.",
        },
      ],
    },
    {
      title: "Alumni – Doctoral Students",
      members: [
        {
          name: "Whu",
          bio: "Postdoctoral researcher in microbial composting technologies.",
        },
        { name: "Okku", bio: "Environmental policy researcher." },
        {
          name: "Dais",
          bio: "Now a data scientist in environmental analytics.",
        },
        {
          name: "Hng",
          bio: "Focuses on bio-waste enzymatic processing.",
        },
        {
          name: "Dd",
          bio: "Environmental impact assessment specialist.",
        },
        {
          name: "Bag",
          bio: "Biotechnologist in organic waste valorization.",
        },
        {
          name: "Emwa",
          bio: "Renewable resource management consultant.",
        },
      ],
    },
    {
      title: "Alumni – Masters Students",
      members: [
        {
          name: "Cle",
          bio: "Sustainability engineer at a manufacturing company.",
        },
        {
          name: "Se",
          bio: "Research assistant in waste-to-energy systems.",
        },
        { name: "Alejandro Quezada", bio: "Environmental data analyst." },
        {
          name: "Ct",
          bio: "Focuses on industrial composting optimization.",
        },
        {
          name: "Auo",
          bio: "Graduate student pursuing environmental chemistry.",
        },
        {
          name: "Qie",
          bio: "Continued as technical staff post-graduation.",
        },
        {
          name: "Sctor",
          bio: "Works in municipal solid waste operations.",
        },
        {
          name: "Tcom",
          bio: "Research assistant in recycling technologies.",
        },
      ],
    },
    {
      title: "Alumni – Undergraduate Students",
      members: [
        {
          name: "Ao",
          bio: "Now pursuing a Master’s in Environmental Science.",
        },
        {
          name: "Mat",
          bio: "Junior research associate in waste data analysis.",
        },
        { name: "Je", bio: "Works in sustainability consulting." },
        {
          name: "Ea",
          bio: "Data engineer focusing on smart waste systems.",
        },
        { name: "Emily Gowan", bio: "Field technician for compost testing." },
        {
          name: "H",
          bio: "Assistant researcher in renewable materials.",
        },
        {
          name: "M",
          bio: "Sustainability specialist in recycling innovation.",
        },
      ],
    },
  ];

  // 🧩 Icon map for all sections
  const iconMap = {
    "Principal Investigator": FaAward,
    "Postdoctoral Fellows": FaFlask,
    "Technical Staff": FaUserTie,
    "Doctoral Students": FaUserGraduate,
    "Masters Students": FaUserGraduate,
    "Undergraduate Students": FaUserGraduate,
    "Alumni – Postdoctoral Fellows": FaFlask,
    "Alumni – Technical Staff": FaUsersCog,
    "Alumni – Doctoral Students": FaUserGraduate,
    "Alumni – Masters Students": FaUserGraduate,
    "Alumni – Undergraduate Students": FaUserGraduate,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-blue-900 text-white py-16 px-8">
      {/* 🌟 Header */}
      <h1 className="text-6xl font-extrabold text-center mb-16 relative">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          Our Research Team
        </span>
        <span className="absolute inset-0 blur-3xl opacity-25 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></span>
      </h1>

      {/* 👩‍🔬 Sections */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {sections.map((section, idx) => {
          const Icon = iconMap[section.title] || FaUser;
          return (
            <div key={idx}>
              <h2 className="text-3xl font-semibold text-cyan-300 mb-6 border-b border-cyan-600 pb-2 flex items-center gap-3">
                <Icon className="text-cyan-400 w-7 h-7" />
                {section.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.members.map((member, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-5 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-4">
                      <Icon className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-cyan-200">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
