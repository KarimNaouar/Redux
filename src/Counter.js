import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  console.log(props);

  const increment = () => {
    props.dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    props.dispatch({ type: "RESET" });
  };

  const step1 = () => {
    props.dispatch({ type: "STEP1" });
  };

  const step10 = () => {
    props.dispatch({ type: "STEP10" });
  };

  const step50 = () => {
    props.dispatch({ type: "STEP50" });
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <label name="step">Choose the step: </label>
        <select
          id="step"
          name="step"
          onChange={(e) => {
            e.target.value === "1" && step1();
            e.target.value === "10" && step10();
            e.target.value === "50" && step50();
          }}
        >
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
        <p />

        <button onClick={() => decrement()}>-</button>
        <span className="count">{props.count}</span>
        <button onClick={() => increment()}>+</button>
        <p>
          <button onClick={() => reset()}>Reset</button>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count,
    step: state.step,
  };
};

export default connect(mapStateToProps)(Counter);
