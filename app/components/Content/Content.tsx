import React from 'react'
import TopBox from '../topBox/TopBox'
import Charts from '../charts/Charts'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieData } from '@/app/menuData'
import BarChartBox from '../barChartBox.tsx/BarChartBox'
import PieChartBox from '../piChartBox/PieChartBox'
import BigChartBox from '../bigChartBox/BigChartBox'

function Content() {
  return (
    <div className='content grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min grid-flow-dense'>
      <div className="box col-span-1 row-span-3"><TopBox/></div>
      <div className="box box2"><Charts {...chartBoxUser}/></div>
      <div className="box box3"><Charts {...chartBoxProduct}/></div>
      <div className="box col-span-1 row-span-3"><PieChartBox data={pieData}/></div> 
      <div className="box box5"><Charts {...chartBoxConversion}/></div>
      <div className="box box6"><Charts {...chartBoxRevenue}/></div>
      <div className="box col-span-2 row-span-2 hidden sm:block"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Content
