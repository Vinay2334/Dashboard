'use client';
import Link from "next/link";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip
} from "recharts";

type Props ={
    color:string,
    icon:string,
    title:string,
    dataKey:string,
    number:number | string,
    percentage:number,
    chartData:object[],
}
  
function Charts(props:Props) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="flex flex-col justify-between flex-[3]">
        <div className="flex align-middle gap-2">
          <img src={props.icon} alt="" />
          <span className=" text-sm lg:text-lg">{props.title}</span>
        </div>
        <h1 className="font-bold text-xl">{props.number}</h1>
        <Link href="/" style={{color:props.color}}>View all</Link>
      </div>
      <div className=" flex flex-[2] flex-col justify-between">
        <div className="h-full w-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
                <Tooltip
                contentStyle={{background:"transparent", border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10, y:60}}
                />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer> 
        </div>
        <div className="flex flex-col text-right">
          <span className={`font-bold text-sm md:text-xl ${props.percentage<0 ? "text-red-600": "text-green-500"}`}>{props.percentage}%</span>
          <span className=" text-sm">this month</span>
        </div>
      </div>
    </div>
  );
}

export default Charts;
