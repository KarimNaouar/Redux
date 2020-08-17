import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";

 const reduxMiddleware = (store) => (next) => (action) => {
    //  console.log(action, store.getState());
      if (store.getState().counterReducer.step === 1 && store.getState().counterReducer.count === 10) {
        return alert("10");
      }
      if (store.getState().counterReducer.step === 10 && store.getState().counterReducer.count === 100) {
        alert("100");
      }
      if (store.getState().counterReducer.step === 50 && store.getState().counterReducer.count === 200) {
        alert("200");
      }
      return next(action);
    };

export  const store = createStore(rootReducer, compose(applyMiddleware(reduxMiddleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));