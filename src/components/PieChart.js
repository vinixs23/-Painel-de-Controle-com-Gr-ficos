// Importações necessárias
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Configurações da biblioteca Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Dados e opções para o gráfico de pizza
const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Distribuição de Cores',
      data: [30, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gráfico de Pizza - Distribuição de Cores',
    },
  },
};

// Componente PieChart
const PieChart = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
