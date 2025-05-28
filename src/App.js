import React from 'react';
import Homepage from "./Components/HomePage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Homepage />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;