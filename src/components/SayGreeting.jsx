import React, {useState} from 'react';

function SayGreeting() {
  const [showGreeting, setShowGreeting] = useState(true);
  const handleClick = () => {
    console.log('Clicked the button');
    setShowGreeting(!showGreeting)
  }
  return <div>
    {showGreeting && <p>Hello</p>}
    <button onClick={handleClick}>Show / Hide</button>
  </div>;
}
export default SayGreeting;
