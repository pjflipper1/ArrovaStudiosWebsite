import React from 'react';
import './App.css';

function ToolBar(){
  return(
      <div className='navbar'>
          <img src='C:\Users\ammaa\Downloads\arrova\ArrovaStudiosWebsite\my-react-app\src\assets\channels4_profile.jpg'></img>
          <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">About</a></li>
      </ul>
      </div>
  )
}
function MainContent() {
  var CurrentSlide = 1;
  if (CurrentSlide === 1) {
    return (
      <div className='watch'>
        <h1>Watch</h1>
      </div>
    );
  }
  // Default return in case the condition is not met
  return (
    <div className='default'>
      <h1>Default Content</h1>
    </div>
  );
}

function FooterBar(){
  return(
      <div>
          <h1>Footer</h1>
      </div>
  );
}

function HomePage() {
  return (
    <div className="HomePage">
      <ToolBar />
      <MainContent />
      <FooterBar />
    </div>
  );
}

export default HomePage;
