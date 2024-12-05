import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCenters = () => {
  const data = [
    {
      name: 'Zone A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Zone B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Zone C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Zone D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Zone E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Zone F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Zone G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <div className="vaccination-other-container">
      <h1 className="vaccination-other-heading">Vaccination Centers</h1>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto', marginTop: 20}}
          verticalAlign="top"
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{r: 8}}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}

export default VaccinationCenters
