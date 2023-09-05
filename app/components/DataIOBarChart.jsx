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
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Data I/O Bar Chart',
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
  
  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Data I/O',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(39, 245, 62, 0.8)',
      }
    ],
  };

const DataIOBarChart = () => {
  return (
    <div className='w-full h-72'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default DataIOBarChart
