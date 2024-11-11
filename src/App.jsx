import { useState } from 'react'
import './App.css'

function App() {
  const [formula, setFormula] = useState("0")

  function handleClick() {
    try {
      const sanitizedFormula = formula.replace(/÷/g, '/').replace(/x/g, '*');
      setFormula(eval(sanitizedFormula));
    } catch (e) {
      console.log(e);
      setFormula("0");
    }
  }

  function reset(){
    setFormula("0")
  }

  function handleNumberClick(value) {
    setFormula(prevFormula => {
      if (prevFormula === "0" && value === "0") return "0";
      if (prevFormula === "0") return value;
      return prevFormula + value;
    });
  }
  

  return (
    <>
      <div className='heading'>
        <h1>Calculator App</h1>
        <p>By Joshua Perth Y. Alviso</p>
      </div>
      <div className='calculator-io-area'>
        <h2>{formula}</h2>
      </div>
      <div className='input-area'>
        <div className='calculator-buttons'>
          <div className='calculator-numbers'>
            {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button type="button" key={num} onClick={() => handleNumberClick(num)}>
                {num}
              </button>
            ))}
            <button type="button" onClick={()=>reset()}>CLEAR</button>
            <button type="button" onClick={()=>handleClick()}>=</button>
            
          </div>

          <div className='calculator-operations'>
            {["+", "-", "x", "÷"].map((op) => (
              <button type="button" key={op} onClick={()=>setFormula(formula + op)}>
                {op}
              </button>
            ))}
            
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App
