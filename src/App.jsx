import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/User-input"
import Results from "./Components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1111,
    annualInvestment: 1111,
    expectedReturn: 6,
    duration: 5
  })

  const inputIsValid = userInput.duration >= 1
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} inputByUser={userInput} />
      <div className="center" >
        {!inputIsValid && <h2>Duration must me greater than 0</h2>}
      </div>
      {inputIsValid && <Results input={userInput} />}


    </>
  )

}

export default App
