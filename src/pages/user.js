import React, { useState } from "react";

const initialProfileData = {
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
    { title: "Understanding Soil Carbon Sequestration", date: "June 20, 2025" },
    { title: "Innovations in Sensor Technology", date: "June 10, 2025" },
  ],
};

const User = () => {
  const [editable, setEditable] = useState(false);
  const [profile, setProfile] = useState(initialProfileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (key, index, field, value) => {
    setProfile((prev) => {
      const updated = [...prev[key]];
      updated[index][field] = value;
      return { ...prev, [key]: updated };
    });
  };

  const handleListChange = (key, index, value, subkey) => {
    if (subkey) {
      setProfile((prev) => {
        const updated = [...prev.projects[subkey]];
        updated[index] = value;
        return {
          ...prev,
          projects: { ...prev.projects, [subkey]: updated },
        };
      });
    } else {
      setProfile((prev) => {
        const updated = [...prev[key]];
        updated[index] = value;
        return { ...prev, [key]: updated };
      });
    }
  };

  const addItem = (key, newItem = {}) => {
    setProfile((prev) => ({
      ...prev,
      [key]: [...prev[key], newItem],
    }));
  };

  const addProject = (subkey) => {
    setProfile((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        [subkey]: [...prev.projects[subkey], "New Project"],
      },
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="w-full min-h-screen py-12 px-4 md:px-10 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Edit Button */}
        <div className="text-right">
          <button
            onClick={() => setEditable((prev) => !prev)}
            className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {editable ? "Save Profile" : "Edit Profile"}
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <img
              src={profile.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="rounded-full w-40 h-40 object-cover shadow-md"
            />
            {editable && (
              <label className="absolute top-0 left-0 w-40 h-40 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition">
                <span className="text-center">
                  Click to Upload
                  <br />
                  📤
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <div>
            {editable ? (
              <>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="text-4xl font-bold text-gray-800 mb-2 block w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="text-4xl font-bold text-gray-800 mb-2 block w-full"
                />
                <input
                  type="text"
                  name="title"
                  value={profile.title}
                  onChange={handleChange}
                  className="text-lg text-gray-600 block w-full"
                />
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="mt-4 w-full text-gray-700 rounded border p-2"
                />
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-gray-800">
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="text-lg text-gray-600 mt-2">{profile.title}</p>
                <p className="mt-4 text-gray-700 max-w-2xl leading-relaxed">
                  {profile.bio}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Experience Timeline
          </h3>
          <ul className="space-y-3">
            {profile.experience.map((item, index) => (
              <li key={index} className="border-l-4 border-blue-600 pl-4">
                {editable ? (
                  <>
                    <input
                      type="text"
                      value={item.year}
                      onChange={(e) =>
                        handleArrayChange(
                          "experience",
                          index,
                          "year",
                          e.target.value
                        )
                      }
                      className="text-blue-700 font-medium mb-1 block"
                    />
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) =>
                        handleArrayChange(
                          "experience",
                          index,
                          "role",
                          e.target.value
                        )
                      }
                      className="text-gray-700 w-full"
                    />
                  </>
                ) : (
                  <>
                    <span className="font-medium text-blue-700">
                      {item.year}
                    </span>
                    : {item.role}
                  </>
                )}
              </li>
            ))}
          </ul>
          {editable && (
            <button
              onClick={() => addItem("experience", { year: "", role: "" })}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              + Add Experience
            </button>
          )}
        </div>

        {/* Accomplishments */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Accomplishments
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {profile.accomplishments.map((item, idx) => (
              <li key={idx}>
                {editable ? (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleListChange("accomplishments", idx, e.target.value)
                    }
                    className="w-full"
                  />
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
          {editable && (
            <button
              onClick={() => addItem("accomplishments", "")}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              + Add Accomplishment
            </button>
          )}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Currently Working On
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {profile.projects.current.map((p, idx) => (
                <li key={idx}>
                  {editable ? (
                    <input
                      type="text"
                      value={p}
                      onChange={(e) =>
                        handleListChange(
                          "projects",
                          idx,
                          e.target.value,
                          "current"
                        )
                      }
                      className="w-full"
                    />
                  ) : (
                    p
                  )}
                </li>
              ))}
            </ul>
            {editable && (
              <button
                onClick={() => addProject("current")}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                + Add Project
              </button>
            )}
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Past Projects
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {profile.projects.past.map((p, idx) => (
                <li key={idx}>
                  {editable ? (
                    <input
                      type="text"
                      value={p}
                      onChange={(e) =>
                        handleListChange(
                          "projects",
                          idx,
                          e.target.value,
                          "past"
                        )
                      }
                      className="w-full"
                    />
                  ) : (
                    p
                  )}
                </li>
              ))}
            </ul>
            {editable && (
              <button
                onClick={() => addProject("past")}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                + Add Project
              </button>
            )}
          </div>
        </div>

        {/* Blogs */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Related Blog Posts
          </h3>
          <ul className="space-y-3">
            {profile.blogs.map((blog, i) => (
              <li
                key={i}
                className="border-l-4 border-indigo-500 pl-4 text-gray-700"
              >
                <p className="font-semibold">{blog.title}</p>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default User;
