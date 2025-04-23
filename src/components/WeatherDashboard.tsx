'use client';

import React, { useState, useEffect } from 'react';
import { cityWeatherData, cityHourlyForecasts, cityWeeklyForecasts, weatherHistory, WeatherData, HourlyForecast } from '../data/mockData';
import { SunIcon, CloudIcon } from '@heroicons/react/24/outline';
import { CloudIcon as CloudRainIcon } from '@heroicons/react/24/solid';
import WeatherChart from './WeatherChart';
import ForecastCard from './ForecastCard';
import LocationSearch from './LocationSearch';
import SunTimeline from './SunTimeline';
import WeatherWarnings from './WeatherWarnings';
import AirQualityCard from './AirQualityCard';
import FeelsLikeTemp from './FeelsLikeTemp';
import RainProbability from './RainProbability';
import WeatherHistory from './WeatherHistory';
import CityComparison from './CityComparison';

const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case 'sonnig':
      return <SunIcon className="h-16 w-16 text-yellow-500 hover:rotate-180 transform transition-all duration-1000" />;
    case 'teilweise-bewölkt':
      return <CloudIcon className="h-16 w-16 text-gray-400 hover:translate-x-2 transform transition-all duration-300" />;
    case 'bewölkt':
      return <CloudIcon className="h-16 w-16 text-gray-600 hover:scale-110 transform transition-all duration-300" />;
    case 'regnerisch':
      return <CloudRainIcon className="h-16 w-16 text-blue-500 hover:translate-y-1 transform transition-all duration-300" />;
    default:
      return <SunIcon className="h-16 w-16 text-yellow-500 hover:rotate-180 transform transition-all duration-1000" />;
  }
};

const validateWeatherData = (data: WeatherData | undefined): boolean => {
  if (!data) return false;
  
  const requiredFields = [
    'temperature',
    'condition',
    'humidity',
    'windSpeed',
    'location',
    'feelsLike',
    'sun'
  ] as const;

  const requiredSunFields = ['sunrise', 'sunset', 'daylightHours'] as const;

  return requiredFields.every(field => field in data) &&
         requiredSunFields.every(field => field in data.sun);
};

export default function WeatherDashboard() {
  const [location, setLocation] = useState('Visselhövede');
  const [compareLocation] = useState<string | null>('Bremen');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const currentWeather: WeatherData | undefined = cityWeatherData[location];
  const hourlyData: HourlyForecast[] | undefined = cityHourlyForecasts[location as keyof typeof cityHourlyForecasts];

  useEffect(() => {
    if (currentWeather && !validateWeatherData(currentWeather)) {
      setError('Ungültige oder unvollständige Wetterdaten für diesen Standort.');
    } else {
      setError(null);
    }
  }, [currentWeather]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Wetterdaten werden geladen...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Ein Fehler ist aufgetreten</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => {
              setError(null);
              setLocation('Visselhövede');
            }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    );
  }

  if (!currentWeather || !hourlyData) {
    setError('Keine Wetterdaten für diesen Standort verfügbar.');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold weather-heading text-center mb-2 hover:scale-105 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          Bene&apos;s Wetter Dashboard
        </h1>
        
        {/* Hauptbox mit aktuellen Wetterdaten */}
        <div className="weather-card transform hover:shadow-xl transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] items-center gap-6 sm:gap-8">
            {/* Wetter-Icon und Temperatur */}
            <div className="flex items-center gap-6 p-2 transition-transform duration-300 group-hover:translate-x-1">
              <div className="transform weather-icon bg-white p-4 rounded-lg shadow-md border border-indigo-50 shrink-0 hover:rotate-12 transition-all duration-500 hover:shadow-xl">
                {getWeatherIcon(currentWeather.condition)}
              </div>
              <div className="min-w-[180px]">
                <h2 className="text-2xl sm:text-3xl weather-heading mb-2 hover:text-indigo-600 transition-colors duration-300">{location}</h2>
                <div className="flex items-end gap-2 group-hover:scale-105 transform transition-transform duration-300">
                  <p className="text-5xl sm:text-6xl weather-value bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">{currentWeather.temperature}°</p>
                  <p className="text-xl sm:text-2xl weather-text mb-2">C</p>
                </div>
                <p className="text-lg sm:text-xl weather-text mt-2 font-medium">{currentWeather.condition}</p>
              </div>
            </div>

            {/* Suchleiste in der Mitte */}
            <div className="w-full max-w-md mx-auto transform hover:scale-102 transition-all duration-300">
              <div className="weather-card !p-3 sm:!p-4 hover:shadow-md transition-all duration-300 hover:border-indigo-200">
                <LocationSearch onLocationSelect={setLocation} />
              </div>
            </div>

            {/* Wetterdaten rechts */}
            <div className="weather-card !shadow-none !border-0 w-full lg:w-[320px] p-4 hover:bg-indigo-50/30 rounded-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 hover:translate-x-1 transform transition-all duration-300 p-2 hover:bg-white rounded-lg">
                  <span className="weather-text flex items-center gap-2 text-base sm:text-lg">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center shrink-0 shadow-md">💧</span>
                    <span>Luftfeuchtigkeit</span>
                  </span>
                  <span className="weather-heading text-base sm:text-lg whitespace-nowrap">{currentWeather.humidity}%</span>
                </div>
                <div className="flex items-center justify-between gap-4 hover:translate-x-1 transform transition-all duration-300 p-2 hover:bg-white rounded-lg">
                  <span className="weather-text flex items-center gap-2 text-base sm:text-lg">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center shrink-0 shadow-md">💨</span>
                    <span>Wind</span>
                  </span>
                  <span className="weather-heading text-base sm:text-lg whitespace-nowrap">{currentWeather.windSpeed} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detaillierte Wetterdaten Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="transform hover:scale-102 transition-transform duration-300 h-full hover:z-10">
            <FeelsLikeTemp 
              actual={currentWeather.temperature} 
              feelsLike={currentWeather.feelsLike} 
            />
          </div>
          {currentWeather.airQuality && (
            <div className="transform hover:scale-102 transition-transform duration-300 h-full hover:z-10">
              <AirQualityCard 
                index={currentWeather.airQuality.index} 
                status={currentWeather.airQuality.status} 
              />
            </div>
          )}
          <div className="transform hover:scale-102 transition-transform duration-300 h-full hover:z-10">
            <SunTimeline 
              sunrise={currentWeather.sun.sunrise}
              sunset={currentWeather.sun.sunset}
              daylightHours={currentWeather.sun.daylightHours}
            />
          </div>
        </div>

        {/* Wetterwarnungen */}
        {currentWeather.warnings && currentWeather.warnings.length > 0 && (
          <div className="transform hover:scale-102 transition-transform duration-300">
            <WeatherWarnings warnings={currentWeather.warnings} />
          </div>
        )}

        {/* Regenwahrscheinlichkeit und Städtevergleich */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="transform hover:scale-102 transition-transform duration-300 h-full">
            <RainProbability hourlyData={hourlyData} />
          </div>
          {compareLocation && (
            <div className="transform hover:scale-102 transition-transform duration-300 h-full">
              <CityComparison 
                city1={cityWeatherData[location]}
                city2={cityWeatherData[compareLocation]}
              />
            </div>
          )}
        </div>

        {/* 5-Tage-Vorhersage */}
        <div className="transform hover:scale-102 transition-transform duration-300">
          <ForecastCard location={location} />
        </div>

        {/* Temperaturverlauf und Historie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="transform hover:scale-102 transition-transform duration-300 h-full">
            <WeatherChart hourlyData={hourlyData} />
          </div>
          <div className="transform hover:scale-102 transition-transform duration-300 h-full">
            <WeatherHistory historyData={weatherHistory[location]} />
          </div>
        </div>
      </div>
    </div>
  );
} 