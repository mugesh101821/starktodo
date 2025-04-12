// import React,{useState} from "react";

// const Todo = () => {
//  const[state,setState]=useState(0)
//     return (
//         <div>
//             Todo
//             <h1>{state}</h1>
//             <button onClick={()=>setState(state+1)}>Increment</button>
//             <button onClick={()=>setState(state-2)}>Decrement</button>
//             <button onClick={()=>setState(0)}>Reset</button>
//         </div>
//     );
// };

// export default Todo;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement} from "./assets/storeredux";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div
    >
      <div>Count:{count}</div>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      
    </div>
  );
};

export default Todo;