import { useEffect, useState } from "react";

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