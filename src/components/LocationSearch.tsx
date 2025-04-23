'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { availableCities } from '../data/mockData';

interface LocationSearchProps {
  onLocationSelect: (location: string) => void;
}

export default function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredCities = availableCities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Stadt suchen..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {showSuggestions && searchTerm && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10">
          {filteredCities.map((city) => (
            <div
              key={city}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onLocationSelect(city);
                setSearchTerm('');
                setShowSuggestions(false);
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 