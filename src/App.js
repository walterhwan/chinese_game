import React from 'react'
import { pairs, questions } from './questions'
import './App.css'

function App() {
  const [pairNum, setPairNum] = React.useState(0)
  const [qNum, setQNum] = React.useState(0)
  const text = (questions[qNum] && questions[qNum].text) || ''
  const pair = pairs[pairNum]
  const wordCounts = [questions[pair[0]].wordCount, questions[pair[1]].wordCount]

  console.log(text)
  
  return (
    <div className="App">
      <div className="question-number">
        <button className="question-button" onClick={() => {
          const newPairNum = (pairNum - 1) >= 0 ? (pairNum - 1) : 0
          setPairNum(newPairNum)
        }}>{'<'}</button>
        <p>{`Q${pairNum + 1}`}</p>
        <button className="question-button" onClick={() => {
          const newPairNum = (pairNum + 1) >= 6 ? 0 : (pairNum + 1)
          setPairNum(newPairNum)
        }}>{'>'}</button>
      </div>
      {!text ? (
        <div className="select-screen-div">
        <div className="select-button-div" onClick={() => setQNum([pair[0]])}>
          <p>{`${wordCounts[0]} 字`}</p>
        </div>
        <div className="select-button-div" onClick={() => setQNum([pair[1]])}>
          <p>{`${wordCounts[1]} 字`}</p>
        </div>
      </div>
      ) : (
        <div className="text-black" onClick={() => setQNum(0)}>
          <p>{`${text}`}</p>
        </div>
      )}
    </div>
  )
}

export default App
