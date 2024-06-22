import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import RepoList from "./components/RepoList";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm"; // Import ContactForm component

const App = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/USERNAME/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos', error);
      }
    };
    
    fetchRepos();
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'repositories':
        return <RepoList repos={repos} />;
      case 'contact':
        return <ContactForm />; // Render ContactForm component
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans">
      <Header setCurrentSection={setCurrentSection} />
      <div className="flex">
        <ContactInfo className="w-1/4 p-6" />
        <main className="w-3/4 p-8 flex justify-center items-center">
          <div className="max-w-screen-xl w-full px-4">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
