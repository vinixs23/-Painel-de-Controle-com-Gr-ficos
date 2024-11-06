// Importações necessárias
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Configurações da biblioteca Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Dados e opções para o gráfico de linha
const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Desempenho Mensal',
      data: [200, 300, 400, 250, 450, 500],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: true,
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
      text: 'Gráfico de Linha de Desempenho Mensal',
    },
  },
};

// Componente LineChart
const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
