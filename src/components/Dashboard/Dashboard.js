import { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Chart data={data}></Chart>
    </div>
  );
};

export default Dashboard;
