import React from 'react';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, BarChart, Bar, Legend, ComposedChart } from 'recharts';

function Chart() {
  const data = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
  ];

  return (
    // <BarChart width={730} height={250} data={data}>
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Bar dataKey="pv" fill="#8884d8" />
    // </BarChart>

    // <LineChart width={800} height={600} data={data}>
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <CartesianGrid stroke="lightgrey" strokeDasharray="5 5"/>
    //   <Line type="monotone" dataKey="amt" stroke="#8884d8" />
    //   <Line type="monotone" dataKey="pv" stroke="#387908" />
    //   <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    // </LineChart>

    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" barSize={20} fill="#413ea0" />
      <Bar dataKey="uv" stackId="a" barSize={20} fill="#ff7300" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  )
}


export default Chart;