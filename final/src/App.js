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
    const data = response.json();
    setJobs(data);
    setLoading(false);
  }

  useEffect(() =>{
    fetchJobs();
  },[]);

  //page view on loading of page
  if(loading){
    return <h1>Loading ...</h1>
  }
  return <h2>tabs project setup</h2>
}

export default App
