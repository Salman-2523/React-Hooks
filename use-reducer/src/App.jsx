import "./App.css";
import { useReducer } from "react";
// reducer function must be a pure fuction that means it always returns the same output and doesn't depend any outside value
function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, count: state.count + payload };
    case "SUB":
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
}
// third argument of useReducer
// function initialState(state) {
//   return { count: state.count+2 };
// }

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }, (state) => {
    return { count: state.count + 3 };
  });

  return (
    <div className="App">
      <h1>Counter - {state.count}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>Add</button>
      <button onClick={() => dispatch({ type: "SUB", payload: 1 })}>Sub</button>
    </div>
  );
};

export default App;
