'use client';

import { cityWeeklyForecasts } from '../data/mockData';
import { SunIcon, CloudIcon } from '@heroicons/react/24/outline';
import { CloudIcon as CloudRainIcon } from '@heroicons/react/24/solid';

interface ForecastCardProps {
  location: string;
}

const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case 'sonnig':
      return <SunIcon className="h-8 w-8 mx-auto text-yellow-500" />;
    case 'teilweise-bewölkt':
      return <CloudIcon className="h-8 w-8 mx-auto text-gray-400" />;
    case 'bewölkt':
      return <CloudIcon className="h-8 w-8 mx-auto text-gray-600" />;
    case 'regnerisch':
      return <CloudRainIcon className="h-8 w-8 mx-auto text-blue-500" />;
    default:
      return <SunIcon className="h-8 w-8 mx-auto text-yellow-500" />;
  }
};

export default function ForecastCard({ location }: ForecastCardProps) {
  const forecast = cityWeeklyForecasts[location];

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-indigo-50">
      <h2 className="text-lg font-medium text-gray-800 mb-4">5-Tage-Vorhersage</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {forecast.map((day) => (
          <div 
            key={day.day} 
            className="p-4 bg-white rounded-lg border border-indigo-50 shadow-sm 
                     hover:shadow-md hover:border-indigo-200 hover:scale-105 
                     transform transition-all duration-300 ease-in-out"
          >
            <div className="text-center">
              <p className="text-base font-medium text-gray-800">{day.day}</p>
              <div className="my-2">
                {getWeatherIcon(day.condition)}
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="text-lg font-semibold text-indigo-600">{day.high}°</span>
                <span className="text-sm text-gray-500">{day.low}°</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{day.condition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 