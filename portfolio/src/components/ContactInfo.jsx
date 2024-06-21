import React from 'react';
import profilePic from '../assets/profile.png'; // Replace with your profile picture

const ContactInfo = () => {
  return (
    <aside className="bg-dark-card p-6 rounded-lg text-center">
      <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full mx-auto"/>
      <h2 className="text-xl font-bold mt-4">Name</h2>
      <p className="text-sm text-gray-400">Developer</p>
      <div className="mt-4 text-sm text-gray-400 space-y-2">
        <p>Email: info@example.com</p>
        <p>Location: United States</p>
      </div>
    </aside>
  );
};

export default ContactInfo;