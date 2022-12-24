import React, { useState, useEffect } from 'react';
import ZamanaKarsi from "./ZamanaKarsi";

function CountdownTimer({ seconds }) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect((props) => {
        if (timeLeft === 0) {
            // window.location = '/ZamanaKarsi';
            alert("Zaman Doldu!!!")
        }
    }, [timeLeft]);

    return (
        <div>
            <h2>Kalan Süre: {timeLeft} Saniye</h2>
        </div>
    );
}

export default CountdownTimer;
