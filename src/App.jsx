import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/counter';

function App() {
  const [playClicked, setPlayClicked] = useState(false);

  return (
    <Router>
      <div>
        {!playClicked && (
          <div className='flex justify-center items-center h-screen w-screen'>
            <Link to="/counter">
            <button onClick={() => setPlayClicked(true)}>
              Play
            </button>
          </Link>
          </div>
        )}
        {playClicked && (
          <Routes>
            <Route path="/counter" element={<Counter />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
