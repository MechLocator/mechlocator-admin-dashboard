import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['January', 'February', 'March', 'April', 'March', 'June'],
    datasets: [
      {
        label: 'Users',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(233, 11, 241, 0.8)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(46, 39, 46, 0.8)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(15, 203, 205, 0.8)',
          'rgba(205, 115, 15, 0.8)',
        ],
        borderColor: [
            'rgba(233, 11, 241, 0.8)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(46, 39, 46, 0.8)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(15, 203, 205, 0.8)',
            'rgba(205, 115, 15, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

const UsersPie = () => {
  return (
    <div className='w-auto h-32'>
      <Doughnut data={data} options={{plugins: {legend: {display:false}}}} />
    </div>
  )
}

export default UsersPie
