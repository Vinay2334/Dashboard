'use client'
import { BarChart, Bar,Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    title:string,
    color:string,
    dataKey:string,
    chartData:object[],
}
function BarChartBox(props:Props) {
  return (
    <div className='w-full h-full'>
      <h1 className='mb-5 text-sm lg:text-xl'>{props.title}</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
            <Tooltip contentStyle={{backgroundColor:"#2a3447", borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
