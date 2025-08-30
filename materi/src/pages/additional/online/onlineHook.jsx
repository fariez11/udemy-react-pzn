import { use, useEffect, useState } from "react"

export default function useOnline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const [hasInternet, setInternet] = useState(true)

    useEffect(() => {

        function handleOnline() {
            setIsOnline(true)
        }

        function handleOffline() {
            setIsOnline(false)
            setInternet(false)
        }

        async function checkInternet() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
                    method: "HEAD",
                    cache: "no-store",
                });
                setInternet(true);
            } catch (error) {
                setInternet(false);
            }
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)
        
        checkInternet();
        setInterval(() => {
            if (navigator.onLine) checkInternet();
        }, 1000);

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
            // clearInterval(interval)
        }

    }, [])

    return {isOnline, hasInternet}
}