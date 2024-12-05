import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

import './index.css'

const DeceasedPatients = () => {
  const data = [
    {
      name: '4th Aug',
      deaths: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '5th Aug',
      deaths: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '6th Aug',
      deaths: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '7th Aug',
      deaths: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '8th Aug',
      deaths: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '9th Aug',
      deaths: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '10th Aug',
      deaths: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <div className="vaccination-deceased-container">
      <h1 className="vaccination-deceased-heading">Deceased Patients</h1>
      <AreaChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="deaths"
          stroke="#5884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  )
}

export default DeceasedPatients
