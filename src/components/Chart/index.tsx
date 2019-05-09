import * as React from "react";
import { styled } from "linaria/react";
import { VictoryChart, VictoryArea, VictoryAxis } from "victory";
import { TransactionsDay } from "src/models/TransactionsDay";

export const ChartBox = styled.div`
    margin: 10px 0 0;
`;

const axisStyle = {
    axis: { stroke: "var(--gray4)" },
    ticks: {
        size: 5,
        stroke: "var(--gray3)",
    },
    tickLabels: {
        fontSize: 11,
        fill: "var(--gray3)",
        padding: 2,
    },
};

const areaStyle = { data: { fill: "var(--primary)" } };

export type ChartProps = {
    data: TransactionsDay[];
};

export const Chart: React.SFC<ChartProps> = ({ data }) => {
    const chartData = data.map(q => ({ date: q.date, value: q.value.value }));

    return (
        <ChartBox>
            <VictoryChart width={320} height={120} padding={{ bottom: 20 }}>
                <VictoryAxis scale="time" style={axisStyle} />
                <VictoryArea
                    style={areaStyle}
                    data={chartData}
                    animate={{ duration: 1000 }}
                    x="date"
                    y="value"
                    interpolation="natural"
                />
            </VictoryChart>
        </ChartBox>
    );
};
