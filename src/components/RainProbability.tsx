'use client';

import React from 'react';
import { CloudIcon } from '@heroicons/react/24/outline';

interface RainProbabilityProps {
  hourlyData: Array<{
    time: string;
    rainProbability: number;
  }>;
}

export default function RainProbability({ hourlyData }: RainProbabilityProps) {
  const maxProbability = Math.max(...hourlyData.map(hour => hour.rainProbability));

  return (
    <div className="weather-card h-full group">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg font-medium text-gray-800">Regenwahrscheinlichkeit</h2>
        <CloudIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
      </div>

      <div className="space-y-1">
        {/* Maximale Regenwahrscheinlichkeit */}
        <div className="flex justify-center mb-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-300 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            <span className="text-lg font-bold text-white">{maxProbability}%</span>
          </div>
        </div>

        {/* Stündliche Wahrscheinlichkeiten */}
        <div className="space-y-1">
          {hourlyData.map((hour) => (
            <div key={hour.time} className="group/item hover:bg-gray-50 p-1 rounded-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{hour.time}</span>
                <span className="text-xs font-medium text-gray-800 group-hover/item:text-indigo-600 transition-colors duration-300">{hour.rainProbability}%</span>
              </div>
              <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-300 group-hover/item:from-indigo-500 group-hover/item:to-blue-500"
                  style={{ width: `${hour.rainProbability}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Legende */}
        <div className="border-t border-gray-100 pt-1">
          <p className="text-xs text-gray-500 text-center group-hover:text-gray-600 transition-colors duration-300">
            Max: {maxProbability}% ({hourlyData.find(hour => hour.rainProbability === maxProbability)?.time})
          </p>
        </div>
      </div>
    </div>
  );
} 