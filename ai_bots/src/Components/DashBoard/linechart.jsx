// import "./styles.css";
import React from "react";
import data from "./data"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";



export default function App() {
    return (
        <div className="Chart_wrapper">


            <LineChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                {/* <CartesianGrid strokeDasharray="0 0" /> */}
                <XAxis dataKey="name" stroke="" padding={{ right: 20 }} />
                <YAxis stroke="" padding={{ top: 20 }} />
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="top" align="right" />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#FF9500"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                />
                <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#347AE2"
                    strokeWidth={2}
                    activeDot={{ r: 6 }} />
            </LineChart>
        </div>
    );
}
