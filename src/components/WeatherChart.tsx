'use client';

import React, { useState, useEffect } from 'react';
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

interface WeatherChartProps {
  hourlyData: Array<{ time: string; temperature: number }>;
}

export default function WeatherChart({ hourlyData }: WeatherChartProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [hourlyData]);

  const data = {
    labels: hourlyData.map(data => data.time),
    datasets: [
      {
        label: 'Temperatur (°C)',
        data: hourlyData.map(data => data.temperature),
        borderColor: 'rgb(99, 102, 241)', // indigo-500
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
          gradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(99, 102, 241)',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 10,
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 10,
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-indigo-50">
      <h2 className="text-lg font-medium text-gray-800">Temperaturverlauf</h2>
      {isLoading ? (
        <div className="h-[400px] mt-4 animate-pulse bg-gray-100 rounded-lg" />
      ) : (
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-200 
            scrollbar-track-transparent hover:scrollbar-thumb-indigo-300 
            transition-all duration-300">
          <div className="h-[400px] mt-4">
            <Line data={data} options={options} />
          </div>
        </div>
      )}
    </div>
  );
} 