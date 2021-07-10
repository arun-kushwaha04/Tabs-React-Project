import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value,setValue] = useState(0);

  //function to fetch api
  const fetchJobs = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  }

  useEffect(() =>{
    fetchJobs();
  },[]);

  //page view on loading of page
  if(loading){
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    )    
  }
  const {company ,title, dates, duties} = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn-container */}
        <div className="btn-container">
          {jobs.map((element,index) =>{
            return (
            <button key={element.id} onClick={()=>{setValue(index)}} className={`job-btn ${index === value && "active-btn"}`}>
                {element.company}
            </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((element,index) =>{
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{element}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
