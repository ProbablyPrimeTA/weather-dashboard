'use client';

import React from 'react';
import { WeatherData } from '../data/mockData';

export default function CityComparison({ city1, city2 }: { city1: WeatherData; city2: WeatherData }) {
  return (
    <div className="weather-card h-full group">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">Städtevergleich</h3>
      <div className="grid grid-cols-2 gap-4">
        {[city1, city2].map((city, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-indigo-50 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 group-hover:bg-gray-50">
            <h4 className="font-medium text-gray-700 border-b border-gray-200 pb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {city.location}
            </h4>
            <div className="space-y-2 mt-2">
              <div className="flex justify-between items-center hover:bg-white p-1 rounded transition-all duration-300">
                <span className="text-gray-600">Temperatur</span>
                <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{city.temperature}°C</span>
              </div>
              <div className="flex justify-between items-center hover:bg-white p-1 rounded transition-all duration-300">
                <span className="text-gray-600">Gefühlt</span>
                <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{city.feelsLike}°C</span>
              </div>
              <div className="flex justify-between items-center hover:bg-white p-1 rounded transition-all duration-300">
                <span className="text-gray-600">Luftfeuchtigkeit</span>
                <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{city.humidity}%</span>
              </div>
              <div className="flex justify-between items-center hover:bg-white p-1 rounded transition-all duration-300">
                <span className="text-gray-600">Wind</span>
                <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{city.windSpeed} km/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 