import StatisticLine from "./StatisticLine";
const Statistics = (props) => {
const {good, neutral, bad, sum, average, positive} = props;
    return (
      <div>
        <StatisticLine text ="good" value ={good} />
        <StatisticLine text ="neutral" value = {neutral} />
        <StatisticLine text ="bad" value ={bad} />
        <StatisticLine text = "all" value ={sum} />
        <StatisticLine text = "average" value ={average} />
        <StatisticLine text = "positive" value ={positive} />
      </div>
    );
}
export default Statistics