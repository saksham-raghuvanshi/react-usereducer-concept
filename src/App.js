import { useReducer } from "react";

const reducerfn = (currentCounter, action) => {

  switch (action.type) {

    case 'INCREMENT': return currentCounter +1;

    case 'DECREMENT': return currentCounter - 1;

    case 'RESET': return 0;
    
    default:  return 0;
  }
};


const App = () => {
  const [counter, dispatch] = useReducer(reducerfn,0);

  const onIncrement = () => {
    dispatch({type: 'INCREMENT'});

  }

  const onDecrement = () => {
    dispatch({type: 'DECREMENT'});
  }

  const onreset = () => {
    dispatch({type: 'RESET'});
  }
  return (
    <div>
    <div>Counter: {counter}</div>
      <button type="button" onClick={onIncrement}>Increment</button>
      <button type="button" onClick={onDecrement}>Decrement</button>
      <button type="button" onClick={onreset}>Reset</button>

    </div>
  )
}

export default App


