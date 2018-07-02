import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const timeSeriesBarChart = ({data,title,yMax}) =>
    <div className="panel panel-default">
        <div className="panel-heading">{title}</div>
        <div className="panel panel-body">
        <BarChart width={600} height={300} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="dateTime"/>
            <YAxis domain= {[0, yMax]}/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        </div>
    </div>

export default timeSeriesBarChart;