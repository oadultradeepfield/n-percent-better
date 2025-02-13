import { useMemo } from "react";

const useCalculatedMetrics = (currentState: string, percentAmount: string) => {
    return useMemo(() => {
        const current = parseFloat(currentState);
        const percent = parseFloat(percentAmount);
        if (isNaN(current) || isNaN(percent))
            return { targetList: {}, changeList: {} };

        const dailyRate = 1 + percent / 100;
        const timeFrames: Record<string, number> = {
            "1 Day": 1,
            "1 Week": 7,
            "1 Month": 30,
            "3 Months": 90,
            "6 Months": 180,
            "1 Year": 365,
        };

        const targetList: Record<string, string> = {};
        const changeList: Record<string, string> = {};

        Object.entries(timeFrames).forEach(([label, days]) => {
            const target = current * Math.pow(dailyRate, days);
            targetList[label] = target.toFixed(2);
            changeList[label] = (target - current).toFixed(2);
        });

        return { targetList, changeList };
    }, [currentState, percentAmount]);
};

export default useCalculatedMetrics;
