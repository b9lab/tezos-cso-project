import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * Helps to fetch data on client-side
 */
export function useData(action: any, address: string): any {
    const [data, setData] = useState<any | null>();
    const [oldAddress, setOldAddress] = useState<string>(address);
    
    useEffect(() => {
        let isMounted = true;
        if (!data || address != oldAddress) {
            action(address).then((result: any) => {
                if (isMounted) {
                    setData(result);
                    setOldAddress(address);
                }
            }).catch(console.error);
        }
        return () => { isMounted = false };
    }, [address]);

    return data;
}

/**
 * Retry strategy implementing exponential backoff algorithm
 */
export function useInterval(callback: any, timeoutCallback: any, initialDelay: number, maxDelay: number, maxRetryCount: number) {
    const savedCallback = useRef<any>();
    const [retryCount, setRetryCount] = useState<number>(0);

    useEffect(() => savedCallback.current = callback, [callback]);

    useEffect(() => {
        const tick = () => {
            if (retryCount < maxRetryCount) {
                savedCallback.current();
                setRetryCount(retryCount + 1);
            } else {
                timeoutCallback();
            }
        }

        if (initialDelay) {
            const delay = Math.min(Math.pow(retryCount, 2) + initialDelay, maxDelay);
            const interval = setInterval(tick, delay);
            return () => clearInterval(interval);
        }
    }, [callback, initialDelay, maxDelay, retryCount]);
}

/**
 * Detects a click outside of a given reference
 */
export function useClickOutside(ref: MutableRefObject<any>, onClickOutside: (value: boolean) => void) {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && !event.target.id.includes('beacon-alert-wrapper-')) {
                onClickOutside(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, onClickOutside]);
}

/**
 * Sets a value with a given delay
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(timeout);
        };
    }, [value, delay]);

    return debouncedValue;
}