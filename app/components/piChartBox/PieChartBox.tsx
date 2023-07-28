"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface Item {
  id: number;
  name: string;
  value: number;
  color: string;
}

interface Props {
  data: Item[];
}

const PieChartBox = ({data}:Props) => {
  return (
    <div className="pieChartBox h-full w-full flex flex-col justify-center">
      <h1 className=" text-xl lg:text-2xl">Revenue of Projects($)</h1>
      <div className="chart flex justify-between gap-3 text-sm">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options grid grid-cols-2 flex-1 text-sm" style={{ flexWrap: "wrap" }}>
        {data.map((item) => (
          <div className="option flex gap-2 align-middle" key={item.name}>
            <div className="title flex gap-2 align-middle">
              <div className="dot w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;