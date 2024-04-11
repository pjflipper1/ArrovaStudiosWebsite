import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Watch from './Watch';
import Games from './Games';
import About from './About';

function ToolBar({ setCurrentSlide }) {
  return (
    <div className='navbar'>
      <ul>
        <li><button onClick={() => setCurrentSlide(0)}>Home</button></li>
        <li><button onClick={() => setCurrentSlide(1)}>Watch</button></li>
        <li><button onClick={() => setCurrentSlide(2)}>Games</button></li>
        <li><button onClick={() => setCurrentSlide(3)}>About</button></li>
      </ul>
    </div>
  );
}

function MainContent({ currentSlide }) {
  if (currentSlide === 0) {
    return (
      <Home />
    );
  } else if (currentSlide === 1) {
    return (
      <Watch />
    );
  } else if (currentSlide === 2) {
    return (
      <Games />
    );
  } else if (currentSlide === 3) {
    return (
      <About />
    );
  } else {
    return (
      <div className='default'>
        <h1>Default Content</h1>
      </div>
    );
  }
}

function FooterBar() {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

  return (
    <div className="HomePage">
      <ToolBar setCurrentSlide={setCurrentSlide} />
      <MainContent currentSlide={currentSlide} />
      <FooterBar />
    </div>
  );
}

export default HomePage;
