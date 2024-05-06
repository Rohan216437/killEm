import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayGround = () => {
    const [count, setCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ top: 28, left: 47 });
    const [timerId, setTimerId] = useState(null);
    const navigate = useNavigate();

    const incrementCount = () => {
        setCount(count + 1);
        const randomTop = Math.random() * 75; 
        const randomLeft = Math.random() * 75;
        setButtonPosition({ top: randomTop, left: randomLeft });
        clearTimeout(timerId);
    };

    const handleBackClick = () => {
        navigate('/');
        window.location.reload();
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const randomTop = Math.random() * 75; 
            const randomLeft = Math.random() * 75;
            setButtonPosition({ top: randomTop, left: randomLeft });
            setCount(count - 1)
        }, 5000);

        setTimerId(timeoutId);

        return () => clearTimeout(timeoutId);
    }, [buttonPosition , count]);

    const buttonStyle = {
        top: `${buttonPosition.top}%`,
        left: `${buttonPosition.left}%`,
        // transition: 'top 0.5s, left 0.5s',
    };
 
  return (
    <div className='p-8 flex-col h-screen w-screen'>
        <div>
            <button onClick={handleBackClick}>Back</button>
        </div>
        <div className='flex justify-between items-center h-1/4'>
            <div></div>
    <div className='flex items-center'>
        <h2>{count}</h2>
    </div>
    <h2>Chances: 5</h2>
</div>



        <div className='flex justify-center items-center h-3/4 relative'>
            <button style={buttonStyle} className="absolute w-20 h-20 bg-green-600" onClick={incrementCount}>
            Increment
            </button>
        </div>
    </div>
  )
}

export default PlayGround;
