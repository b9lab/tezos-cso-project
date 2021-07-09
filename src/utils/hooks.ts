import { useEffect, useState } from "react";

export function useData(action: any): any {
    const [data, setData] = useState<any | null>();
    
    useEffect(() => {
        let isMounted = true;
        if (!data) {
            action().then((result: any) => {
                if (isMounted) setData(result);
            });
        }
        return () => { isMounted = false };
    }, []);

    return data;
}