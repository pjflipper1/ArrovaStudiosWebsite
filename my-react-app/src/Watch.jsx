import React from 'react';
import './App.css';

const Watch = () => {
  return (
    <div className="watch">
      <div className='section'>
        <h1>Short Films</h1>
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
      <div className='section'>
        <h1>Comedy Shows</h1>
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
    </div>
  );
};

export default Watch;
