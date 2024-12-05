import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts'

import './index.css'

const VariantsAndVaccineEffects = () => {
  const data = [
    {
      name: 'Zone A',
      Severe: 590,
      variants: 800,
      Vaccination: 1400,
      cnt: 490,
    },
    {
      name: 'Zone B',
      Severe: 868,
      variants: 967,
      Vaccination: 1506,
      cnt: 590,
    },
    {
      name: 'Zone C',
      Severe: 1397,
      variants: 1098,
      Vaccination: 989,
      cnt: 350,
    },
    {
      name: 'Zone D',
      Severe: 1480,
      variants: 1200,
      Vaccination: 1228,
      cnt: 480,
    },
    {
      name: 'Zone E',
      Severe: 1520,
      variants: 1108,
      Vaccination: 1100,
      cnt: 460,
    },
    {
      name: 'Zone F',
      Severe: 1400,
      variants: 680,
      Vaccination: 1700,
      cnt: 380,
    },
  ]

  return (
    <div className="vaccination-variants-container">
      <h1 className="vaccination-variants-heading">
        Variants Effects And Vaccination
      </h1>
      <ComposedChart
        width={1000}
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
        <Legend verticalAlign="top" />
        <Area
          type="monotone"
          dataKey="Vaccination"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="variants" barSize={20} fill="#f13ea0" />
        <Line type="monotone" dataKey="Severe" stroke="#ff7300" />
        <Scatter dataKey="cnt" fill="red" />
      </ComposedChart>
    </div>
  )
}

export default VariantsAndVaccineEffects
