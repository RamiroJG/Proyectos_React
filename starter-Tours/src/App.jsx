import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  // Consumir la API
  const fetchTours = async () =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchTours()
  },[])

  if(isLoading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  // TODO
  if(tours.length == 0){
    return(
      <main className="title">
        <h2>No tour left</h2>
        <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={fetchTours}>Refresh Tours</button>
      </main>
    )
  }


  return(
    <div>
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
      
    </div>
  )
};
export default App;
