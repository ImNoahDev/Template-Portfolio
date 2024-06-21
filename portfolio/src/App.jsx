import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans">
      <Header />
      <div className="flex">
        <ContactInfo className="w-1/4 p-6"/>
        <main className="w-3/4 p-8">
          <AboutMe />
          <Skills />
        </main>
      </div>
    </div>
  );
};

export default App;