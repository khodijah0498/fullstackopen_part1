
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}
const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <div>
      <Part part1 = {part1} exercises1 = {exercises1}/>
      
      <Part part2 = {part2} exercises2 = {exercises2} />
      
      <Part part3 = {part3} exercises3 = {exercises3} />
    </div>
  );
}
const Part = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
}
const Total = ({exercises1, exercises2, exercises3}) => {
  return(
    <div>
    <p>Totals {exercises1 + exercises2 + exercises3}</p>
  </div> 
)
  }
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course.name} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} />
      <Content part2={parts[1].name} exercises2={parts[1].exercises} />
      <Content part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  );
};


export default App;
