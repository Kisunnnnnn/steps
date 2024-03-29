import { useState } from 'react'
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {



  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)


  function handlePrevious() {


    if (step > 1) {
      setStep((curStep) => curStep - 1)
    }


  }
  function handleNext() {
    if (step < messages.length) {
      setStep(curStep => curStep + 1)

    }

  }



  return (
    <>
      <button className="close" onClick={() => setIsOpen(curValIsOpen => !curValIsOpen)}>&times;</button>
      {
        isOpen &&
        (
          <div>
            <div className="steps">

              <div className="numbers">
                <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`${step >= 3 ? "active" : ""}`}>3</div>
              </div>
              <p className="message">Step: {step}: {messages[step - 1]}</p>

              <div className="buttons">
                {/* <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>Previous</button>
                <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>Next</button> */}

                <Button textColor="#fff" bgColor="#7950f2" onClickButton={handlePrevious}>
                  <span>👈</span> Previous
                </Button>
                <Button textColor="#fff" bgColor="#7950f2" onClickButton={handleNext}>
                  Next <span>👉</span>
                </Button>

              </div>

            </div>
          </div>
        )

      }
    </>

  )



}

function Button({ textColor, bgColor, onClickButton, children }) {
  return <button style={{ backgroundColor: { bgColor }, color: { textColor } }} onClick={onClickButton}>
    {children}
  </button>
}

export default App
