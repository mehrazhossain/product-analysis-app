import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ data }) => {
  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //   },
  // ];
  // const data01 = [
  //   {
  //     name: 'Group A',
  //     value: 400,
  //   },
  //   {
  //     name: 'Group B',
  //     value: 300,
  //   },
  //   {
  //     name: 'Group C',
  //     value: 300,
  //   },
  //   {
  //     name: 'Group D',
  //     value: 200,
  //   },
  //   {
  //     name: 'Group E',
  //     value: 278,
  //   },
  //   {
  //     name: 'Group F',
  //     value: 189,
  //   },
  // ];
  // const data02 = [
  //   {
  //     name: 'Group A',
  //     value: 2400,
  //   },
  //   {
  //     name: 'Group B',
  //     value: 4567,
  //   },
  //   {
  //     name: 'Group C',
  //     value: 1398,
  //   },
  //   {
  //     name: 'Group D',
  //     value: 9800,
  //   },
  //   {
  //     name: 'Group E',
  //     value: 3908,
  //   },
  //   {
  //     name: 'Group F',
  //     value: 4800,
  //   },
  // ];

  return (
    <>
      <div className="container mx-auto m-10">
        <BarChart className="mx-auto" width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sale" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="container mx-auto m-10">
        <ComposedChart className="mx-auto" width={730} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="sale" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </>
  );
};

export default Chart;
