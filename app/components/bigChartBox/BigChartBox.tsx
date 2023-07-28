"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function BigChartBox() {
  const data = [
    {
      name: "2023-01",
      ethereum: 400,
      solana: 240,
    },
    {
      name: "2023-02",
      ethereum: 300,
      solana: 139,
    },
    {
      name: "2023-03",
      ethereum: 200,
      solana: 980,
    },
    {
      name: "2023-04",
      ethereum: 278,
      solana: 390,
    },
    {
      name: "2023-05",
      ethereum: 180,
      solana: 480,
    },
    {
      name: "2023-06",
      ethereum: 239,
      solana: 380,
    },
    {
      name: "2023-07",
      ethereum: 349,
      solana: 430,
    },
  ];
  return (
    <div className='bigChartBox w-full h-full flex flex-col justify-between'>
      <h1>Projects Deployed</h1>
      <div className="chart w-full h-[300px]">
      <ResponsiveContainer width="99%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="ethereum" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="solana" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BigChartBox
