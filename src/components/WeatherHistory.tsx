'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HistoryData {
  date: string;
  high: number;
  low: number;
  condition: string;
}

export default function WeatherHistory({ historyData }: { historyData: HistoryData[] }) {
  if (!historyData || historyData.length === 0) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg font-medium text-gray-800">Wetterhistorie</h2>
        <p className="text-base text-gray-600 mt-4">Keine historischen Daten verfügbar</p>
      </div>
    );
  }

  const data = {
    labels: historyData.map(day => day.date),
    datasets: [
      {
        label: 'Höchsttemperatur',
        data: historyData.map(day => day.high),
        borderColor: 'rgb(99, 102, 241)', // indigo-600
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(99, 102, 241)',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Tiefsttemperatur',
        data: historyData.map(day => day.low),
        borderColor: 'rgb(129, 140, 248)', // indigo-400
        backgroundColor: 'rgba(129, 140, 248, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(129, 140, 248)',
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          padding: 20,
          color: '#4B5563', // gray-600
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          }
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(243, 244, 246, 0.6)', // gray-100
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // gray-500
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // gray-500
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          }
        }
      }
    },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-indigo-50">
      <h2 className="text-lg font-medium text-gray-800">Wetterhistorie</h2>
      <div className="h-[400px] mt-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
} 