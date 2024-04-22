import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming this is where your custom styles are defined

const Games = () => {
  return(
    <div className='section'>
        <div>
          <h1>Display Nice Design</h1>
        </div>
        <h1>Games</h1>
        <div className='layout'>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
        </div>
        <div className='layout'>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
          <button id='tile-button'>
            <div className="show-tile">            
            </div>
          </button>
        </div>
    </div>
  )
}

export default Games;