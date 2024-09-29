import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WeeklyActivity } from '../../../services/admin/api/dashboardApi';

interface tickProps {
    x: number;
    y: number;
    stroke?: string;
    payload?: {
        value: string;
    };
    value?: string;
}

interface LineChartProps {
    data?: WeeklyActivity[]
}

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

export default class LineChartDashboard extends PureComponent<LineChartProps> {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-with-customized-label-d6rytv';

    
    render() {
        const { data } = this.props;

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