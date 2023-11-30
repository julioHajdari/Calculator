import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    operator: "",
  });

  function handleNumber(value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      operator: calc.operator,
    });
  }

  function handleOperation(value) {
    const total = doCalculate();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      operator: value,
    });
  }

  function doCalculate() {
    let total = parseInt(calc.total);

    switch (calc.operator) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      operator: "",
    });
  }

  return (
    <div className="App">
      <div className="display">{calc.current}</div>
      <CalcButtons value="7" onClick={handleNumber} />
      <CalcButtons value="8" onClick={handleNumber} />
      <CalcButtons value="9" onClick={handleNumber} />
      <CalcButtons value="/" className="operator" onClick={handleOperation} />

      <CalcButtons value="4" onClick={handleNumber} />
      <CalcButtons value="5" onClick={handleNumber} />
      <CalcButtons value="6" onClick={handleNumber} />
      <CalcButtons value="*" className="operator" onClick={handleOperation} />

      <CalcButtons value="1" onClick={handleNumber} />
      <CalcButtons value="2" onClick={handleNumber} />
      <CalcButtons value="3" onClick={handleNumber} />
      <CalcButtons value="-" className="operator" onClick={handleOperation} />

      <CalcButtons value="C" onClick={handleClear} />
      <CalcButtons value="0" onClick={handleNumber} />
      <CalcButtons value="=" onClick={handleOperation} />
      <CalcButtons value="+" className="operator" onClick={handleOperation} />
    </div>
  );
}

function CalcButtons(props) {
  return (
    <button
      onClick={() => props.onClick(props.value)}
      className={props.className}
    >
      {props.value}
    </button>
  );
}

export default App;
