// FloatingToggle.jsx
import { useState, useEffect } from "react";

const styles = `
    @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    .fade-in {
        animation: fadeIn 2s ease-in-out;
    }

    .bubble{
        max-width: 650px;
        background-color: rgba(1, 129, 127, 0.3);
        color: rgba(251,251,251, 0.3);
        border-radius: 16px 3px 16px 16px;
        transition: background-color 500ms cubic-bezier(.22,.9,.3,1),
            color 500ms cubic-bezier(.22,.9,.3,1);
    }
        
    .bubble:hover {
        background-color: rgba(1, 129, 127, 0.9);
        color: rgba(251,251,251, 0.9);
    }
`;

// const bubble = {
//     maxWidth: "650px",
//     backgroundColor: "rgba(1, 129, 127, 0.5)",
//     borderRadius: "16px 3px 16px 16px",
// };

const messages = [
    {
        text: "Finish what you started.",
        translation: "Selesaikan apa yang sudah kamu mulai.",
        author: "Unknown",
    },
    {
        text: "Finish what you started.",
        translation: "Selesaikan apa yang sudah kamu mulai.",
        author: "Unknown",
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
    }

];

export default function FloatingToggle() {
    const [index, setIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setFadeKey((prev) => prev + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const { text, translation, author } = messages[index];

    return (
        <>
            <style>{styles}</style>
            <div className="quote position-fixed bottom-0 end-0 m-3 p-2 px-3 fade-in fade-out bubble" key={fadeKey}>
                <blockquote className="blockquote fs-6 text-white p-0 m-0">
                    <p className="pb-3">"{text}"</p>
                    <footer className="blockquote-footer text-white">
                        <span className="fw-lighter fst-italic">{translation}</span>
                        <br />
                        <p>{author}</p>
                    </footer>
                </blockquote>
            </div>
        </>
    );
};
