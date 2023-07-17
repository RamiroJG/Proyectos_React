import { useState } from "react";
import data from "./data";
import ListPerson from "./components/ListPerson";

const App = () => {

  const [people, setPeople] = useState(data)
  let countBrithday = Number(people.length);

  const handleClearList = () =>{
    setPeople([])
  }
  
  return(
    <>
      <h2>Birthday Reminder - Starter</h2>
      <main>
        <section className="container">
          <h3>{countBrithday} Brithdays Today</h3>
          <ListPerson people={people}/>
          <button type="button" className="btn btn-block" onClick={handleClearList}>Clear List</button>
        </section>
      </main>
    </>
  ) 
};
export default App;
