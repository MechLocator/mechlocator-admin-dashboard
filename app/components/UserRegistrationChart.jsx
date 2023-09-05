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
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'User Registration Bar Chart',
      },
    },
    scales: {
      x: {
          grid: {
              display: false
          }
      },
      y: {
          grid: {
              display: false
          }
      }
    }
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Users',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

const UserRegistrationChart = () => {
  return (
    <div className='w-full h-72'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default UserRegistrationChart
