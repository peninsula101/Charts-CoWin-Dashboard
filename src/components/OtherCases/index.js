import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts'

import './index.css'

const OtherCases = () => {
  const data = [
    {
      subject: 'TB',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Cancer',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Diabetes',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Heart Related',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Nervous',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Age Related',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ]

  return (
    <div className="vaccination-other-container">
      <h1 className="vaccination-other-heading">
        Other Cases Deceased Patients
      </h1>
      <RadarChart
        width={1000}
        height={400}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tick={{fill: '#ffffff', fontSize: 12, margin: 5}}
        />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="City AB"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.5}
        />
      </RadarChart>
    </div>
  )
}

export default OtherCases
