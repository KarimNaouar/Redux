const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    case "STEP1":
      return { ...state, step: 1 };
    case "STEP10":
      return { ...state, step: 10 };
    case "STEP50":
      return { ...state, step: 50 };
    default:
      return state;
  }
};

export default reducer;
