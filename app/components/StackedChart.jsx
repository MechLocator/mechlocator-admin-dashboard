import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Downloads Comparison per Platform',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'iPhone',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#35EE32',
      },
      {
        label: 'Android',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(17, 34, 241, 0.8)',
      }
    ],
  };

const StackedChart = () => {
  return (
    <div className='w-auto h-56'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default StackedChart
