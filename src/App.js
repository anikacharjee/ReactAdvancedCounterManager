// App.js
import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);

  const handleIncrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };

  const handleDelete = (id) => {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id)
    );
  };

  const handleReset = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: 0 } : counter
      )
    );
  };

  const totalCounter = counters.reduce((total, counter) => total + counter.count, 0);

  return (
    <div>
      <h1>Advanced Counter Application</h1>
      <h2>Total Count: {totalCounter}</h2>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          count={counter.count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      ))}
    </div>
  );
};

export default App;
