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
        text: 'Downloads Per Platform',
      },
      Legend: {
        display: false
      }
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
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Android',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(75, 192, 192)',
      }
    ],
  };

const DownloadsLineChart = () => {
  return (
    <div className='w-auto h-56'>
      <Bar options={...options} data={data} />
    </div>
  )
}

export default DownloadsLineChart
