import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from 'firebase/app';


// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXqYDsLHwEZvb2b9BBd5dT0963VDRO1zo",
  authDomain: "acostajulio-dev.firebaseapp.com",
  projectId: "acostajulio-dev",
  storageBucket: "acostajulio-dev.firebasestorage.app",
  messagingSenderId: "974768286444",
  appId: "1:974768286444:web:b6ae2ea1e1c60565d253c9"
};


const app = initializeApp(firebaseConfig);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
