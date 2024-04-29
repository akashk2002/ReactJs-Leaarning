import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SayGreeting from './components/SayGreeting';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <SayGreeting/> */}
      <RegistrationForm/>
    </div>
  );
}

export default App
