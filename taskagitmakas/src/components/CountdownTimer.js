import {Alert} from "react-bootstrap";
import {useEffect, useState} from "react";

export function CountdownTimer({seconds,playerCounter,computerCounter}) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect((props) => {
        if (timeLeft === -1) {
            alert("Zaman Doldu. Oyun yeniden Başlatılacak!.")
            window.location='/ZamanaKarsi'
        }
    }, [timeLeft]);

    return (
        <div>
            <h2>
                <Alert variant="warning">Kalan Süre: {timeLeft} Saniye </Alert>
            </h2>
        </div>
    );
}