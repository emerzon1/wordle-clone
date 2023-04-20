import React, {useState, useEffect, useRef} from 'react'
import WordContainer from './Components/wordContainer'

const initialWordState = () => ([...Array(6)].map(x => [...Array(5)].map(x => ({letter: "", color: ""}))))

function App() {
  const [wordState, setWordState] = useState(initialWordState())
  const [wordIndex, setWordIndex] = useState(0)
  const [currentGuess, setCurrentGuess] = useState(0)
  const wordInd = useRef()
  const wordStateRef = useRef()
  const guess = useRef()
  guess.current = currentGuess
  wordStateRef.current = wordState
  wordInd.current = wordIndex
  
  useEffect(() => {
    document.addEventListener("keypress", onKeyPress)
    console.log('run')
    return () => {
      document.removeEventListener("keypress", onKeyPress)
    }
  }, [])

  const onKeyPress = (e) => {
    const clickedKey = e.key

    const newState = JSON.parse(JSON.stringify(wordStateRef.current))
    if (clickedKey === "Backspace") {
      newState[guess.current][wordInd.current - 1].letter = ""
      setWordIndex(w => w - 1)
      setWordState(newState)
    } else if (clickedKey === "ENTER") {
      // changeLetterColor()
      setWordIndex(0)
      setCurrentGuess(g => g + 1)
    } else if (e.charCode != 8){
      newState[guess.current][wordInd.current].letter = clickedKey
      setWordIndex(w => w + 1)
      setWordState(newState)
    }
    else {
      newState[guess.current][wordInd.current - 1].letter = 's';
      setWordIndex(w => w - 1)
      setWordState(newState)
    }
  }

  return (
    <div style={{width: "100%", height: "100%"}}>
      <WordContainer wordState={wordState} />
    </div>
  );
}

export default App;
