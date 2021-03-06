
import './App.css';
import { useState } from 'react';
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
   const score = new Array(7).fill(0)
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(score);
  const highestVote = Math.max(...vote);
   const highestVoteIndex = vote.indexOf(highestVote);

  const randomAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handleVote = () => {
    const points = [...vote];
    points[selected] = points[selected] + 1;
    setVote(points);
  };
  const highestAnecdotes = anecdotes.filter((anecdotes, aIndex)=> vote[aIndex]===highestVote);
  // console.log("first highest,", anecdotes[highestVoteIndex]);
  console.log(highestAnecdotes)

  return (
    <div>
      <p>Anecdotes of the day</p>
      <div>{anecdotes[selected]}</div>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={randomAnecdotes}>next anecdotes</button>
      <p>Anecdotes with must votes</p>
      <p>{anecdotes[highestVoteIndex]}</p>
      <p>has {vote[selected]} votes</p>
    </div>
  );
};;

export default App;
