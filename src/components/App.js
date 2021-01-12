import React, {useState} from "react";
import "../App.css"
import Button from "./Button";
import Result from "./Result";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       result: "",
//     };
//   }



const App = () => {

  let [result, setResult] = useState('');


  let onClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      reset();
    } else if (value === "CE") {
      backspace();
    } else {
       setResult(result + value);
    }
    
  };

  let calculate = () => {
    let checkResult = "";
    
      checkResult = result;
    
    try {

      let r =  eval(checkResult); 
      console.log(typeof(r))
      setResult(r.toString())
    } catch (e) {
      setResult("error"
    );
    }
  };

  let reset = () => {
    setResult("");
  };

  let backspace = () => {
    console.log(result)
    setResult(result.slice(0, -1));
  };

  
    return (
      <div className="MainDiv">
      <div className="Label"> CALCULATOR</div> 
        <div>
          {" "}
          <Result result={result} />{" "}
        </div>
        <div>
          {" "}
          <Button handleClick={(e)=>onClick(e)} />{" "}
        </div>
      </div>
    );
  
}

export default App;