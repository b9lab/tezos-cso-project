import { useEffect, useRef, useState } from "react";

export function useData(action: any, address: string): any {
    const [data, setData] = useState<any | null>();
    
    useEffect(() => {
        let isMounted = true;
        if (!data) {
            action(address).then((result: any) => {
                if (isMounted) setData(result);
            });
        }
        return () => { isMounted = false };
    }, []);

    return data;
}

export function useInterval(callback: any, initialDelay: number, maxDelay: number) {
    const savedCallback = useRef<any>();
    const [retryCount, setRetryCount] = useState<number>(0);

    useEffect(() => savedCallback.current = callback, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
            setRetryCount(retryCount + 1);
        }

        if (initialDelay) {
            const delay = Math.min(Math.pow(retryCount, 2) + initialDelay, maxDelay);
            const interval = setInterval(tick, delay);
            return () => clearInterval(interval);
        }
    }, [callback, initialDelay, maxDelay, retryCount]);
}