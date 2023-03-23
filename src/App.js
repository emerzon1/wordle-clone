import React, {useState} from 'react'
import WordContainer from './Components/wordContainer'

const initialWordState = () => ([...Array(6)].map(x => [...Array(5)].map(x => ({letter: "", color: ""}))))

function App() {
  const [wordState, setWordState] = useState(initialWordState())
  console.log(wordState)
  return (
    <div style={{width: "100%", height: "100%"}}>
      <WordContainer wordState={wordState} />
    </div>
  );
}

export default App;
