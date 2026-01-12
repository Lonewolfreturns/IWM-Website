import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import InterestingNews from "./pages/InterestingNews";
import Profile from "./pages/Profile";
import ResearchActivities from "./pages/ResearchActivities";
import User from "./pages/user";
import About from "./pages/About";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Header />

        {/* Main Content */}
        <main className="flex-grow w-full min-h-[calc(100vh-160px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/research-activities"
              element={<ResearchActivities />}
            />
            <Route path="/interesting-news" element={<InterestingNews />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
