// Counter.js
import React from 'react';

const Counter = ({ id, count, onIncrement, onDecrement, onDelete, onReset }) => {
  return (
    <div>
      <p>Counter {id}: {count}</p>
      <button onClick={() => onIncrement(id)}>Increment</button>
      <span style={{ margin: '0 5px'}}></span>
      <button onClick={() => onDecrement(id)}>Decrement</button>
      <span style={{ margin: '0 5px'}}></span>
      <button onClick={() => onDelete(id)}>Delete</button>
      <span style={{ margin: '0 5px'}}></span>
      <button onClick={() => onReset(id)}>Reset</button>
    </div>
  );
};

export default Counter;
