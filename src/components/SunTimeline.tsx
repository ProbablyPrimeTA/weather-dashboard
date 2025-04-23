'use client';

import React from 'react';
import { SunIcon } from '@heroicons/react/24/outline';

interface SunTimelineProps {
  sunrise: string;
  sunset: string;
  daylightHours: number;
}

export default function SunTimeline({ sunrise, sunset, daylightHours }: SunTimelineProps) {
  return (
    <div className="weather-card h-full group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Tageslicht</h2>
        <SunIcon className="h-6 w-6 text-gray-400 group-hover:text-yellow-500 group-hover:rotate-90 transition-all duration-700" />
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-300 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
          <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{daylightHours.toFixed(1)}h</span>
        </div>
        
        <div className="text-center w-full">
          <div className="flex justify-between text-sm mb-2">
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Aufgang</p>
              <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{sunrise}</p>
            </div>
            <div className="group-hover:-translate-x-1 transition-transform duration-300">
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Untergang</p>
              <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{sunset}</p>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="relative">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full group-hover:from-orange-500 group-hover:to-yellow-400 transition-all duration-500"
                  style={{ width: `${(daylightHours / 24) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 