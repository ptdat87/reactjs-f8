import { useState } from 'react'

function ToDoList() {
 
  const [job, setJob] = useState('')
  
  const [jobs, setJobs] = useState(()=>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))??[]
    return storageJobs
  })
  const handleSubmit = () => {
    setJobs(prev => {
      const newJob = [...prev, job]
      const jsonJobs = JSON.stringify(newJob)
      localStorage.setItem('jobs',jsonJobs);
      return newJob
    })
    setJob('')
  }

  //UI
  return (
    <div style={{ padding: 32 }}>
      <input value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>

    </div>


  );
}

export default ToDoList;
