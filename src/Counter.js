import React from "react";
import { connect } from "react-redux";
import { decrement  } from "./actions/decAction";
import { increment  } from "./actions/incAction";
import { reset  } from "./actions/resetAction";
import { step } from "./actions/stepActions";
const Counter = (props) => {
  console.log(props);
  return (
    <div className="counter" style={{ display:"flex", flexDirection:"column",  alignItems:"center"}}>
      <h2>Counter</h2>
      <div style={{ display:"flex", flexDirection:"column",  alignItems:"center"}}>
        <label name="step">Choose the step: </label>
        <select
          id="step"
          name="step"
          onChange={(e) => props.setStep(+e.target.value)}
        >
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
        <p />

        <button onClick={props.increment}>+</button>
        <span className="count">{props.count}</span>
        <button onClick= {props.decrement}>-</button>        
        <p>
          <button onClick={props.reset}>Reset</button>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
//  console.log(state);
  return {
    count: state.counterReducer.count,
    step: state.counterReducer.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    setStep: (x) => dispatch(step(x)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
