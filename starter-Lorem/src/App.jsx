import React, { useState } from "react";
import { nanoid } from 'nanoid';
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const id = nanoid();
  console.log(id)

  const handleSubmit = (e) =>{
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0,amount))
  }
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          min={1} 
          step={1} 
          max={8} 
          value={count} 
          onChange={(e) => setCount(e.target.value)} 
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item) =>{
          return(
            <p key={nanoid()}>{item}</p>
          )
        })}
      </article>
    </section>
  )
};
export default App;