import React, { useEffect, useState } from 'react';
import Dirt from '../assets/dirt.png';
import Mole from '../assets/mole1.png';

const MolePop = () => {
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    setIsPopped(true);
  }, []);

  return (
    <div className="relative w-48 h-48 overflow-hidden">
      <div className={`absolute w-full h-full bottom-0 flex justify-center items-end ${isPopped ? 'animate-pop-up' : ''}`}>
        <img src={Mole} alt="mole" className="w-24 h-24" />
      </div>
      <div
        className="absolute w-full h-1/3 bottom-0"
        style={{
          backgroundImage: `url(${Dirt})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
      ></div>
    </div>
  );
};

export default MolePop;
