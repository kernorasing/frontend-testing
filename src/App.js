import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Container from './layouts/Container/Container';


function App() {
  return (
    <div>
      <Navbar title="รถของฉัน" />
      <Container />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
