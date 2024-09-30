import React, { useEffect, useState } from 'react';

const Timer = ({ title, endTime, onExpire }) => {
    const [timeLeft, setTimeLeft] = useState(() => new Date(endTime) - new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = new Date(endTime) - new Date();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft <= 0) {
                clearInterval(interval);
                onExpire();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime, onExpire]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="timer p-6 m-4 bg-gray-100 rounded-lg shadow-lg w-64">
            <h3 className="text-lg font-semibold text-blue-600">
                {title}
            </h3>
            <p className="text-2xl font-bold mt-2">
                {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
            </p>
        </div>
    );
};

export default Timer;
