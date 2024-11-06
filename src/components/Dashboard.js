import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

// Componente Dashboard com estilos aprimorados
const Dashboard = () => {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Painel</h2>
        <ul style={styles.sidebarMenu}>
          <li style={styles.sidebarItem}>Gráfico de Barras</li>
          <li style={styles.sidebarItem}>Gráfico de Linha</li>
          <li style={styles.sidebarItem}>Gráfico de Pizza</li>
        </ul>
      </aside>
      <main style={styles.mainContent}>
        <h1 style={styles.title}>Painel de Controle</h1>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>Gráfico de Barras</h2>
            <BarChart />
          </div>
          <div style={styles.card}>
            <h2>Gráfico de Linha</h2>
            <LineChart />
          </div>
          <div style={styles.card}>
            <h2>Gráfico de Pizza</h2>
            <PieChart />
          </div>
        </div>
      </main>
    </div>
  );
};

// Estilos aprimorados para o Dashboard
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '20px',
  },
  sidebarTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  sidebarMenu: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarItem: {
    margin: '10px 0',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    width: '30%',
    minWidth: '300px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
};

export default Dashboard;
