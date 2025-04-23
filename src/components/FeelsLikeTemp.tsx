'use client';

import React from 'react';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface FeelsLikeTempProps {
  actual: number;
  feelsLike: number;
}

export default function FeelsLikeTemp({ actual, feelsLike }: FeelsLikeTempProps) {
  const difference = Math.abs(actual - feelsLike);
  const isWarmer = actual < feelsLike;
  const explanation = isWarmer
    ? 'Fühlt sich wärmer an durch Luftfeuchtigkeit'
    : 'Fühlt sich kälter an durch Wind';

  const gradientColor = isWarmer
    ? 'from-orange-400 to-red-300'
    : 'from-blue-400 to-indigo-300';

  return (
    <div className="weather-card h-full group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Gefühlte Temperatur</h2>
        <ArrowTrendingUpIcon className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${isWarmer ? 'rotate-45' : '-rotate-45'}`} />
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <span className="text-3xl font-bold text-white">{feelsLike}°</span>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Aktuell: <span className="text-indigo-600">{actual}°C</span>
          </p>
          {difference > 1 && (
            <p className={`text-sm text-gray-600 ${isWarmer ? 'bg-orange-50' : 'bg-blue-50'} p-2 rounded-lg transition-colors duration-300`}>
              {explanation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 