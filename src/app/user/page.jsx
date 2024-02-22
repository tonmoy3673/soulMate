"use client";
import React, { useState } from "react";

const userPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>This is Page</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Counter : {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default userPage;
