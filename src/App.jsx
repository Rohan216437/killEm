import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlayGround from './components/PlayGround';

function App() {
  const [playClicked, setPlayClicked] = useState(false);

  return (
    <Router>
      <div>
        {!playClicked && (
          <div className='flex justify-center items-center h-screen w-screen'>
            <Link to="/playground">
            <button onClick={() => setPlayClicked(true)}>
              Play
            </button>
          </Link>
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
