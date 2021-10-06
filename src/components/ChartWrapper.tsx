import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export type ChartProps = {
    options?: Object,
    series?: Array<Object>,
    type?: "area" | "line" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "candlestick" | "radar" | "polarArea" | "rangeBar" | undefined,
    width?: string | number,
    height?: string | number
}

/**
 * Chart wrapper
 */
export default function ChartWrapper(props: ChartProps) {

    return (
        <ApexCharts
            options={props.options}
            series={props.series}
            type={props.type}
            width={props.width}
            height={props.height}
        />
    );
}
