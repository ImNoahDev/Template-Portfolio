import React from 'react';
import pythonLogo from '../assets/python.png';
import htmlLogo from '../assets/html5.png';
import cssLogo from '../assets/css3.png';
import jsLogo from '../assets/js.png';

const Skills = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mt-8">Coding Languages</h2>
      <div className="h-1 w-16 bg-light-yellow my-2"></div>
      <div className="flex space-x-4 mt-4">
        <img src={pythonLogo} alt="Python" className="h-16 w-16"/>
        <img src={htmlLogo} alt="HTML5" className="h-16 w-16"/>
        <img src={cssLogo} alt="CSS3" className="h-16 w-16"/>
        <img src={jsLogo} alt="JavaScript" className="h-16 w-16"/>
      </div>
      <h2 className="text-3xl font-bold mt-8">What Do I Do?</h2>
      <div className="h-1 w-16 bg-light-yellow my-2"></div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-card p-4 rounded-lg">
          <h3 className="text-xl font-bold text-light-yellow">Engineering</h3>
          <p className="text-gray-400 text-sm mt-2">High-quality technology based products and prototypes.</p>
        </div>
        <div className="bg-dark-card p-4 rounded-lg">
          <h3 className="text-xl font-bold text-light-yellow">Web Development</h3>
          <p className="text-gray-400 text-sm mt-2">High-quality development of sites at the professional level.</p>
        </div>
        <div className="bg-dark-card p-4 rounded-lg">
          <h3 className="text-xl font-bold text-light-yellow">Software Development</h3>
          <p className="text-gray-400 text-sm mt-2">Professional development of backend and shell-based apps.</p>
        </div>
        <div className="bg-dark-card p-4 rounded-lg">
          <h3 className="text-xl font-bold text-light-yellow">Graphic Design</h3>
          <p className="text-gray-400 text-sm mt-2">Professional graphic design and video editing with Adobe suite.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;