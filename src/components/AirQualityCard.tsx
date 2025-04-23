'use client';

import React from 'react';
import { CloudIcon } from '@heroicons/react/24/outline';

interface AirQualityCardProps {
  index?: number;
  status?: string;
}

export default function AirQualityCard({ 
  index = 1, 
  status = 'Gut' 
}: AirQualityCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'Gut': return 'bg-gradient-to-br from-green-400 to-green-300';
      case 'Moderat': return 'bg-gradient-to-br from-yellow-400 to-yellow-300';
      case 'Ungesund': return 'bg-gradient-to-br from-orange-400 to-orange-300';
      case 'Schlecht': return 'bg-gradient-to-br from-red-400 to-red-300';
      default: return 'bg-gradient-to-br from-gray-400 to-gray-300';
    }
  };

  const getStatusDescription = () => {
    switch (status) {
      case 'Gut': return 'Ideale Bedingungen für Aktivitäten im Freien';
      case 'Moderat': return 'Akzeptabel für die meisten Menschen';
      case 'Ungesund': return 'Reduzieren Sie längere Aktivitäten im Freien';
      case 'Schlecht': return 'Vermeiden Sie Aktivitäten im Freien';
      default: return 'Keine Beschreibung verfügbar';
    }
  };

  return (
    <div className="weather-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Luftqualität</h2>
        <CloudIcon className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className={`w-24 h-24 rounded-full ${getStatusColor()} flex items-center justify-center shadow-lg`}>
          <span className="text-3xl font-bold text-white">{index}</span>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">{status}</p>
          <p className="text-sm text-gray-600">{getStatusDescription()}</p>
        </div>
      </div>
    </div>
  );
} 