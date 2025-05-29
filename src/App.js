import React from 'react';
import Homepage from "./Components/HomePage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import './App.css';
import BackGround from './Components/BackGround';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <BackGround />
      <main>
        <Homepage />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;