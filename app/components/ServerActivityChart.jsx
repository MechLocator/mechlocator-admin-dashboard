import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
        legend: {
          display: false,
        },
      },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Server Activity',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Requests',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Disk Usage',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(203, 39, 245, 0.8)',
        yAxisID: 'y',
      },
      {
        label: 'Responses',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Load',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(17, 221, 95, 0.8)',
        yAxisID: 'y1',
      },
      {
        label: 'Network Bandwith',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(226, 236, 20, 0.8)',
        yAxisID: 'y1',
      },
    ],
  };

const ServerActivityChart = () => {
  return (
    <div className='w-full h-72'>
      <Line options={options} data={data} />
    </div>
  )
}

export default ServerActivityChart
