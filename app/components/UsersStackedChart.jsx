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
      text: 'Stacked Chart Of Driver & Partner Downloads',
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
      label: 'Driver',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(245, 39, 68, 0.8)',
    },
    {
      label: 'Partner',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(39, 245, 66, 0.8)',
    }
  ],
};

const UsersStackedChart = () => {
  return (
    <div className='w-auto h-56'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default UsersStackedChart
