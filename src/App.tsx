import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SayGreeting from './components/SayGreeting';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SayGreeting/>
    </div>
  );
}

export default App
