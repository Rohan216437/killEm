import React, { useEffect, useState } from 'react';
import Mole from '../assets/mole1.png';
// import '../index.css';

const MolePop = () => {
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    setIsPopped(true);
  }, []);

  return (
    <div className="mole-container">
      
      <div className="dirt"></div>
    </div>
  );
};

export default MolePop;
