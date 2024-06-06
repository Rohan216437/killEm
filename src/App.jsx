import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlayGround from './components/PlayGround';
import PlayCoverNoBG from './assets/uploadMole.png';

function App() {
  const [playClicked, setPlayClicked] = useState(false);

  return (
    <Router>
      <div className='bg-sky-500 h-screen'>
        {!playClicked && (
          <div className='flex justify-center h-full w-screen'>
            <div className="bg-sky-500 flex flex-col items-center relative">
              <div className="relative">
                <img src={PlayCoverNoBG} alt="Cover PNG here" className="w-full h-auto" style={{ backgroundColor: 'transparent' }}/>
                <svg className='absolute bottom-0 left-1/2 transform -translate-x-1/2' width="100%" height="130" viewBox="0 0 500 100">
                  {/* <path id="curve" d="M 50,90 Q 250,10 450,90" fill="transparent"/> */}
                  <path id="curve" d="M 50,50 Q 230,140 450,50" fill="transparent"/>
                  <text width="500" className='bubble-font'>
                    <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                      Kill'Em
                    </textPath>
                  </text>
                </svg>
              </div>
              <Link to="/playground" className='mt-5'>
                <button onClick={() => setPlayClicked(true)} className="bg-white hover:bg-sky-100 text-sky-500 font-bold py-6 px-10 rounded-full shadow-md hover:shadow-2xl transition duration-500">
                  Start Game
                </button>
              </Link>
            </div>
          </div>
        )}
        {playClicked && (
          <Routes>
            <Route path="/playground" element={<PlayGround />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
