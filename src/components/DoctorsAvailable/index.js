import {RadialBarChart, RadialBar, Tooltip, Legend} from 'recharts'

import './index.css'

const DoctorsAvailable = () => {
  const data = [
    {
      name: '18-24',
      available: 190,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      name: '25-29',
      available: 200,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: '30-34',
      available: 150,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: '35-39',
      available: 80,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: '40-49',
      available: 90,
      pv: 3908,
      fill: '#fffe6c',
    },
    {
      name: '50+',
      available: 130,
      pv: 4800,
      fill: '#d23d57',
    },
    {
      name: 'unknown',
      available: 180,
      pv: 4800,
      fill: '#f12658',
    },
  ]

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  }

  return (
    <div className="vaccination-doctors-container">
      <h1 className="vaccination-doctors-heading">
        Doctors Available According to Age
      </h1>
      <RadialBarChart
        width={1000}
        height={500}
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="100%"
        barSize={20}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{position: 'insideStart', fill: '#111'}}
          background
          clockWise
          dataKey="available"
        />
        <Tooltip />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  )
}

export default DoctorsAvailable
