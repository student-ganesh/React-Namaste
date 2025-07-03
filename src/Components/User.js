import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count, setcount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increment
      </button>

      <h1>Count1 = {count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : ganakadam2003@gmail.com</h4>
    </div>
  );
};

export default User;
