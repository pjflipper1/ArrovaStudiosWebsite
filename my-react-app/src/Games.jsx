import React, { useState, useEffect } from 'react';
import './games.css'; // Assuming this is where your custom styles are defined

const Games = () => {
  const [currentClassIndex, setCurrentClassIndex] = useState(1);
  const totalClasses = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentClassIndex((prevIndex) => (prevIndex % totalClasses) + 1);
    }, 3000);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, [totalClasses]);

  return (
    <div className={`scroll-container class${currentClassIndex}`}>
      {/* You can render different content for each class here */}
      {currentClassIndex === 1 && <h1>One</h1>}
      {currentClassIndex === 2 && <h1>Two</h1>}
      {currentClassIndex === 3 && <h1>Three</h1>}
    </div>
  );
};

export default Games;