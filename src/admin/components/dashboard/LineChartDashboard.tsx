import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface tickProps {
    x: number;
    y: number;
    stroke?: string;
    payload?: {
        value: string;
    };
    value?: string;
}

const data = [
    {
        name: 'Monday',
        sold: 4000,
        rented: 2400,
        amt: 2400,
    },
    {
        name: 'Tuesday',
        sold: 3000,
        rented: 1398,
        amt: 2210,
    },
    {
        name: 'Wednesday',
        sold: 2000,
        rented: 9800,
        amt: 2290,
    },
    {
        name: 'Thursday',
        sold: 2780,
        rented: 3908,
        amt: 2000,
    },
    {
        name: 'Friday',
        sold: 1890,
        rented: 4800,
        amt: 2181,
    },
    {
        name: 'Saturday',
        sold: 2390,
        rented: 3800,
        amt: 2500,
    },
    {
        name: 'Sunday',
        sold: 3490,
        rented: 4300,
        amt: 2100,
    },
];

class CustomizedLabel extends PureComponent<tickProps> {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    }
}

class CustomizedAxisTick extends PureComponent<tickProps> {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {payload?.value}
                </text>
            </g>
        );
    }
}

export default class LineChartDashboard extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-with-customized-label-d6rytv';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick x={50}
                        y={100}
                        stroke="#333"
                        payload={{ value: 'Label' }} />} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sold" stroke="#8884d8" label={<CustomizedLabel x={50}
                        y={100}
                        stroke="#333"
                        value= 'Label'  />} />
                    <Line type="monotone" dataKey="rented" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}