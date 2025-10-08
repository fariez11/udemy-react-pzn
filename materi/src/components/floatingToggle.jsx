// FloatingToggle.jsx
import { useState, useEffect } from "react";
import '@assets/css/FloatingToggle.css'
import { floatMessages } from "../assets/data/dataObject";

export default function FloatingToggle() {
    const [index, setIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    const [hover, setHover] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % floatMessages.length);
            // setIndex(() => Math.floor(Math.random() * messages.length));
            setFadeKey((prev) => prev + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const { text, translation, author } = floatMessages[index];

    return (
        <>
            <div className="position-fixed bottom-0 end-0 m-3 p-2 px-3 fade-in fade-out bubble"
                key={fadeKey} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <p> {!hover ? text : translation}</p>
                <p className="text-end">{author}</p>
            </div>
        </>
    );
};
