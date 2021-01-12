import React, {useState}from "react";

// class Button extends React.Component {
  
//   constructor(){
//     super();
const Button = (props) => {

  let [btn, setBtn] = useState(['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/','C','CE'])
    
 
  
   
    return (
      <div>
        <div className="button">

        {btn.map((val) => {return <button id ="btn" name={val} onClick={e => props.handleClick(e.target.name)} > {val} </button> 
        })} 



            {/* <button id="Sbtn" name="C" onClick={e => this.props.onClick(e.target.name)} > Clear </button>
            <button id="Sbtn" name="CE" onClick={e => this.props.onClick(e.target.name)}  > Backspace </button> <br/>

                <button id ="btn" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button id ="btn" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button id ="btn" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button id ="btn" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button id ="btn" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button id ="btn" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button id ="btn" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button id ="btn" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button id ="btn" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button id ="btn" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button id ="btn" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button id ="btn" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button id ="btn" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button id ="btn"name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button id ="btn" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button id ="btn" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/> */}
        </div>
      </div>
    )
  
              }
            
export default Button;
