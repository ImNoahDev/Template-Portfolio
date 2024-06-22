import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    setRepositories(repos);
  }, [repos]);

  return (
    <div className="flex flex-wrap justify-center">
      {repositories.map(repo => (
        <div key={repo.id} className="max-w-xs mx-2 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <RepoItem repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default RepoList;
