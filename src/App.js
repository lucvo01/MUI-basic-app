import React from 'react';
import SearchAppBar from './components/SearchAppBar.js';
import JobCard from './components/JobCard.js';
import jobs from './data/jobs.json';

function App() {
  return (
    <div >
      <SearchAppBar/>
      {jobs.slice(0,4).map((job) => (
        <JobCard id={job.id}
        title={job.title}
        description={job.description}
        skills={job.skills}/>
      ))}
      
    </div>

  );
}

export default App;
