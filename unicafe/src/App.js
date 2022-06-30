import { useState } from "react";
import Statistics from "./Statistics";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const sum = good + neutral + bad;
  const average = (good - bad) / sum;
  const positive = `${(good / sum) * 100}%`;
  const addGood = () => {
    setGood(good + 1);
  };
  const addNeutral = () => {
    setNeutral(neutral + 1);
  };
  const addBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>
      <Statistics good = {good} neutral ={neutral} bad = {bad} sum ={sum} average ={average} positive ={positive}/>
          </div>
  );
};
export default App;
