import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayGround = () => {
    const [count, setCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ top: 28, left: 47 });
    const [chances, setChances] = useState(2);
    const [timerId, setTimerId] = useState(null);
    const [gameOver, setGameOver] = useState(false);
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
            setChances(chances - 1);
        }, 5000);

        setTimerId(timeoutId);

        return () => clearTimeout(timeoutId);
    }, [buttonPosition, count, chances]);

    useEffect(() => {
        if (chances === 0) {
            setGameOver(true);
            clearTimeout(timerId);
        }
    }, [chances, timerId]);

    const buttonStyle = {
        top: `${buttonPosition.top}%`,
        left: `${buttonPosition.left}%`,
    };

    return (
        <div className='p-8 flex-col h-screen w-screen'>
            <div>
                <button onClick={handleBackClick}>Back</button>
            </div>
            <div className='flex justify-between items-center h-1/4'>
                <div className='w-20 h-1/4'></div>
                    <h2 className='w-20 flex justify-center items-center'>{count}</h2>
                <h2>Chances: {chances}</h2>
            </div>

            <div className='flex justify-center items-center h-3/4 relative'>
                {gameOver ? (
                    <h2>Game Over</h2>
                ) : (
                    <button style={buttonStyle} className="absolute w-20 h-20 bg-green-600" onClick={incrementCount}>
                        Increment
                    </button>
                )}
            </div>
        </div>
    )
}

export default PlayGround;
