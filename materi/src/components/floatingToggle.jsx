// FloatingToggle.jsx
import { useState, useEffect } from "react";
import '@assets/css/FloatingToggle.css'
const messages = [
    {
        text: "Finish what you started.",
        translation: "Selesaikan apa yang sudah kamu mulai.",
        author: "YB",
    },
    {
        text: "Even if it’s hard now, it will be worth it in the end. Keep going!",
        translation: "Meskipun sekarang terasa sulit, semuanya akan sepadan pada akhirnya. Teruslah maju!",
        author: "Unknown",
    },
    {
        text: "Every step you take brings you closer to your goal.",
        translation: "Setiap langkah yang kamu ambil membawamu lebih dekat ke tujuanmu.",
        author: "Unknown",
    },
    {
        text: "Success doesn’t come overnight. Keep working, and your time will come.",
        translation: "Kesuksesan tidak datang dalam semalam. Teruslah bekerja, waktumu akan tiba.",
        author: "Dwayne Johnson",
    },
    {
        text: "You’ve already come so far, don’t stop now!",
        translation: "Kamu sudah sejauh ini, jangan berhenti sekarang!",
        author: "Unknown",
    },
    {
        text: "Mistakes are proof that you’re trying. Keep learning and growing.",
        translation: "Kesalahan adalah bukti bahwa kamu sedang berusaha. Terus belajar dan berkembang.",
        author: "John C. Maxwell",
    },
    {
        text: "I had to develop the mentality and stay positive about making my comeback.",
        translation: "Saya harus membentuk pola pikir dan tetap positif untuk bangkit kembali.",
        author: "Alonzo Mourning",
    },
    {
        text: "Dont let money change you",
        translation: "Jangan biarkan uang mengubahmu.",
        author: "Ade Setiawan",
    }

];

export default function FloatingToggle() {
    const [index, setIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    const [hover, setHover] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            // setIndex(() => Math.floor(Math.random() * messages.length));
            setFadeKey((prev) => prev + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const { text, translation, author } = messages[index];

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
