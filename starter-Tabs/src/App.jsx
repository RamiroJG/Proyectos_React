import { useEffect } from "react";
import { useState } from "react";
import JobsInfo from "./components/JobsInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  // currentItem

  const fetchJobs = async () =>{
    const response = await fetch(url);
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchJobs()
  }, [])
  if(isLoading){
    return(
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  return(
    <section className="jobs-center">
      {/* BtnContainer */}
      <BtnContainer 
        jobs={jobs} 
        currentItem={currentItem} 
        setCurrentItem={setCurrentItem}  
      />
      {/* Jobs Info */}
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  ) 
};
export default App;
