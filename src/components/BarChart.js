// Importações necessárias
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Configurações da biblioteca Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Dados e opções para o gráfico de barras
const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Vendas Mensais',
      data: [300, 500, 100, 400, 700, 600],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
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
      text: 'Gráfico de Barras de Vendas Mensais',
    },
  },
};

// Componente BarChart
const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;