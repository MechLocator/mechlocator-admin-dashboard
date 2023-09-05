import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Downloads',
        data: [12, 19, 3, 5, 2, 3, 20],
        backgroundColor: [
          'rgba(241, 224, 11, 0.8)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(241, 11, 53, 0.8)',
          'rgba(19, 241, 11, 0.8)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(11, 29, 241, 0.8)',
        ],
        borderColor: [
            'rgba(241, 224, 11, 0.8)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(241, 11, 53, 0.8)',
            'rgba(19, 241, 11, 0.8)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(11, 29, 241, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

const WeekDownloadsPie = () => {
  return (
    <div className='w-auto h-32'>
      <Pie data={data} options={{plugins: {legend: {display:false}}}} />
    </div>
  )
}

export default WeekDownloadsPie
