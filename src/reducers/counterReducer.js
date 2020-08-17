
const initialState = {
    count: 0,
    step: 1
  };
  
const counterReducer = (state = initialState, action) => {
// console.log(state.counterReducer);
  
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + state.step,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count  - state.step,
        };
      case "RESET":
        return {
          ...state,
          count: 0,
        };
      case "STEP":
        return {
          ...state,
           step: action.payload,
        };

      default:
        return state;
    }
  };

  export default counterReducer;