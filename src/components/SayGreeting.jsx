import React from 'react';

function SayGreeting() {
  const handleClick = () => {
    console.log('Clicked the button');
  }
  return <div>
    <p>Hello</p>
    <button onClick={handleClick}>Click</button>
  </div>;
}
export default SayGreeting;
