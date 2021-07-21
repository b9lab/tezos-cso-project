import { MutableRefObject, useEffect, useRef, useState } from "react";

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

export function useInterval(callback: any, errorCallback: any, initialDelay: number, maxDelay: number, maxRetryCount: number) {
    const savedCallback = useRef<any>();
    const [retryCount, setRetryCount] = useState<number>(0);

    useEffect(() => savedCallback.current = callback, [callback]);

    useEffect(() => {
        const tick = () => {
            if (retryCount < maxRetryCount) {
                savedCallback.current();
                setRetryCount(retryCount + 1);
            } else {
                errorCallback();
            }
        }

        if (initialDelay) {
            const delay = Math.min(Math.pow(retryCount, 2) + initialDelay, maxDelay);
            const interval = setInterval(tick, delay);
            return () => clearInterval(interval);
        }
    }, [callback, initialDelay, maxDelay, retryCount]);
}

export function useClickOutside(ref: MutableRefObject<any>, onClickOutside: (value: boolean) => void) {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, onClickOutside]);
}