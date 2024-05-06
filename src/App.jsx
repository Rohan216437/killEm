import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlayGround from './components/PlayGround';
import PlayCoverNoBG from './assets/PlayCoverNoBG.png'

function App() {
  const [playClicked, setPlayClicked] = useState(false);

  return (
    <Router>
      <div className='bg-sky-500 h-screen'>
        {!playClicked && (
          <div className='flex justify-center h-full w-screen'>
            <div className="bg-sky-500 flex flex-col items-center">
              <img src={PlayCoverNoBG} alt="Cover PNG here"  className="w-full h-auto" style={{ backgroundColor: 'transparent' }}/>
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
