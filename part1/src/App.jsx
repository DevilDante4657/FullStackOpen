import { useState } from 'react'

const Statistics = (props) => {
  return(
    <tr>
      <td>{props.title}</td>
      <td>{props.stat}</td> 
    </tr>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handle}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  let Total = good + neutral + bad
  let Average = (good - bad)/Total
  let Positive = (good * 100)/Total

  console.log(good, neutral, bad)

  if (good == 0 && neutral == 0 && bad == 0){
    return(
      <>
        <h1>Give Feedback</h1>
        <Button handle = {handleGood} text = "Good"/>
        <Button handle = {handleNeutral} text = "Neutral"/>
        <Button handle = {handleBad} text = "Bad"/>
        <h1>Statistics</h1>
        <div>No Feedback Givesdsdn</div>
      </>
    )
  }
  return (
    <>
      <h1>Give Feedback</h1>
      <Button handle = {handleGood} text = "Good"/>
      <Button handle = {handleNeutral} text = "Neutral"/>
      <Button handle = {handleBad} text = "Bad"/>
      <h1>Statistics</h1>
      <table>
      <Statistics title = "Good" stat = {good}/> 
      <Statistics title = "Neutral" stat = {neutral}/>
      <Statistics title = "Bad" stat = {bad}/>
      <Statistics title = "Total" stat = {Total}/>
      <Statistics title = "Average" stat = {Average}/>
      <Statistics title = "Positive" stat = {Positive}/>
      </table>
    </>
  
  )
}

export default App