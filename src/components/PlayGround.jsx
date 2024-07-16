import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import heartImage from '../assets/heartImage.png'


const PlayGround = () => {
    const [count, setCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ top: 28, left: 47 });
    const [chances, setChances] = useState(300);
    const [timerId, setTimerId] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const navigate = useNavigate();

    const incrementCount = () => {
        setCount(count + 10);
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
        <div className='p-8 flex-col h-screen w-screen bg-play-page bg-zoomed bg-top-adjusted'>
            <div className='flex justify-between items-start h-1/4'>
                <div className='w-20 h-1/4'>
                <button className='text-4xl p-2' onClick={handleBackClick}><IoMdArrowRoundBack /></button>
                </div>
                <h2 className='bubble-font  w-20 flex justify-center items-center'>{count}</h2>
                <div className='flex'>
                    {Array.from({ length: chances }).map((_, index) => (
                        <img key={index} src={heartImage} alt="gameHeart" className='w-10 h-10 ' />
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center h-3/4 relative '>
                  {/* <img src={PlayCoverNoBG} alt="Cover PNG here" className="w-full h-auto" style={{ backgroundColor: 'transparent' }}/> */}
                {gameOver ? (
                    <h2  className='bubble-font'>Game Over</h2>
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
