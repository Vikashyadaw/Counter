import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";


const Counter = () => {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

    function reset(){
      setCount(0)
    }
  return (
    <div >
      <h1 className="text-3xl">Total Count: {count}</h1>
      <div>
        <button onClick={decrement} className="bg-blue-500 text-white p-2 rounded text-2xl"><IoMdRemoveCircleOutline /></button>
        <button onClick={increment} className="bg-blue-500 text-white p-2 rounded ml-2 text-2xl"><IoAddCircleOutline /></button>
      </div>
      <button onClick={reset} className="bg-blue-500 text-white p-2 rounded mt-3">Reset</button>
    </div>
  );
};

export default Counter;
