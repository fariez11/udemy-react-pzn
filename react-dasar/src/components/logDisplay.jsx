import { useEffect, useState } from 'react';

let subscribers = [];

// 🔁 Override console.log satu kali
if (!window._logIntercepted) {
    window._logIntercepted = true;

    const originalLog = console.log;

    console.log = function (...args) {
        originalLog.apply(console, args); // tetap tampil di console
        const msg = args.map(String).join(" ");

        subscribers.forEach((cb) => cb(msg));
    };
}

export default function LoggerDisplay() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const handler = (msg) => setLogs((prev) => [...prev, msg]);
        subscribers.push(handler);

        return () => {
            // bersihkan jika unmount
            subscribers = subscribers.filter((fn) => fn !== handler);
        };
    }, []);

    return (
        <div className="card-body m-0 p-0">
            <pre className="my-0 rounded-bottom-0">
                result log
                <button onClick={() => setLogs([])} className="btn btn-outline-secondary btn-sm float-end">
                    <i className="bi bi-arrow-counterclockwise"></i>
                </button>
            </pre>
            <pre className="mb-0 rounded-top-0 px-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {logs.map((log, i) => (
                    <div key={i}>{log}</div>
                ))}
            </pre>
        </div>
    );
}
