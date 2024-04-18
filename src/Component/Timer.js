import { useState, useEffect } from "react"
import TaskModel from "./TaskModal";
const Timer = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTotalSeconds(totalSeconds => totalSeconds + 1);
            }, 1000);
        } else if (!isActive && totalSeconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, totalSeconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

 

    // Convert total seconds to HH:MM:SS format
    const formatTime = () => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formatDigit = (digit) => digit < 10 ? `0${digit}` : `${digit}`;

        return `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;
    };

    return (
        <div className="container-fluid">
            <div className="row centersDv">
                <div className="col-lg-6 timerDiv my-4">
                    <h1>{formatTime()}</h1>
                    <div className="d-flex  gap-2 justify-content-center">
                        <button className='my-2 btnStyle' onClick={toggleTimer}>
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                        <TaskModel />

                    </div>
                </div>

            </div>


            {/* <button className='my-2 btnStyle' onClick={resetTimer}><TaskModel/></button> */}
        </div>
    )
}
export default Timer