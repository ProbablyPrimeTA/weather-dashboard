export interface WeatherData {
  location: string;
  temperature: number;
  condition: 'sonnig' | 'teilweise-bewölkt' | 'bewölkt' | 'regnerisch';
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  sun: {
    sunrise: string;
    sunset: string;
    daylightHours: number;
  };
  airQuality?: {
    index: number;
    status: string;
  };
  warnings?: Warning[];
}

export interface Warning {
  type: 'Sturm' | 'Gewitter' | 'Starkregen' | 'Hitze' | 'Frost';
  severity: 'Niedrig' | 'Mittel' | 'Hoch';
  description: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  rainProbability: number;
}

export interface HistoryData {
  date: string;
  temperature: number;
  high: number;
  low: number;
  condition: 'sonnig' | 'teilweise-bewölkt' | 'bewölkt' | 'regnerisch';
}

export const cityWeatherData: { [key: string]: WeatherData } = {
  'Visselhövede': {
    location: 'Visselhövede',
    temperature: 18,
    condition: 'sonnig',
    humidity: 65,
    windSpeed: 12,
    feelsLike: 16,
    sun: {
      sunrise: '06:30',
      sunset: '20:45',
      daylightHours: 14.25
    },
    airQuality: {
      index: 2,
      status: 'Gut'
    }
  },
  'Bremen': {
    location: 'Bremen',
    temperature: 19,
    condition: 'teilweise-bewölkt',
    humidity: 70,
    windSpeed: 15,
    feelsLike: 17,
    sun: {
      sunrise: '06:32',
      sunset: '20:43',
      daylightHours: 14.18
    },
    airQuality: {
      index: 4,
      status: 'Moderat'
    }
  },
  'Hamburg': {
    temperature: 20,
    condition: 'bewölkt',
    humidity: 75,
    windSpeed: 18,
    location: 'Hamburg',
    feelsLike: 18,
    sun: {
      sunrise: '06:34',
      sunset: '20:41',
      daylightHours: 14.12
    },
    airQuality: {
      index: 6,
      status: 'Moderat'
    }
  },
  'Hannover': {
    temperature: 23,
    condition: 'sonnig',
    humidity: 60,
    windSpeed: 10,
    location: 'Hannover',
    feelsLike: 19,
    sun: {
      sunrise: '06:28',
      sunset: '20:47',
      daylightHours: 14.32
    },
    airQuality: {
      index: 3,
      status: 'Gut'
    }
  },
  'Rotenburg': {
    temperature: 21,
    condition: 'teilweise-bewölkt',
    humidity: 68,
    windSpeed: 11,
    location: 'Rotenburg',
    feelsLike: 17,
    sun: {
      sunrise: '06:36',
      sunset: '20:39',
      daylightHours: 14.08
    },
    airQuality: {
      index: 5,
      status: 'Moderat'
    }
  },
  'Verden': {
    temperature: 22,
    condition: 'sonnig',
    humidity: 63,
    windSpeed: 9,
    location: 'Verden',
    feelsLike: 18,
    sun: {
      sunrise: '06:38',
      sunset: '20:37',
      daylightHours: 14.05
    },
    airQuality: {
      index: 2,
      status: 'Gut'
    }
  },
  'Walsrode': {
    temperature: 20,
    condition: 'regnerisch',
    humidity: 80,
    windSpeed: 14,
    location: 'Walsrode',
    feelsLike: 18,
    sun: {
      sunrise: '06:40',
      sunset: '20:35',
      daylightHours: 13.92
    },
    airQuality: {
      index: 7,
      status: 'Ungesund'
    }
  },
  'Soltau': {
    temperature: 21,
    condition: 'teilweise-bewölkt',
    humidity: 70,
    windSpeed: 13,
    location: 'Soltau',
    feelsLike: 17,
    sun: {
      sunrise: '06:42',
      sunset: '20:33',
      daylightHours: 13.87
    },
    airQuality: {
      index: 4,
      status: 'Moderat'
    }
  },
  'Scheeßel': {
    temperature: 22,
    condition: 'sonnig',
    humidity: 65,
    windSpeed: 10,
    location: 'Scheeßel',
    feelsLike: 18,
    sun: {
      sunrise: '06:44',
      sunset: '20:31',
      daylightHours: 13.80
    },
    airQuality: {
      index: 3,
      status: 'Gut'
    }
  },
  'Sottrum': {
    temperature: 21,
    condition: 'bewölkt',
    humidity: 72,
    windSpeed: 12,
    location: 'Sottrum',
    feelsLike: 17,
    sun: {
      sunrise: '06:46',
      sunset: '20:29',
      daylightHours: 13.75
    },
    airQuality: {
      index: 8,
      status: 'Ungesund'
    }
  }
};

export const cityHourlyForecasts: { [key: string]: HourlyForecast[] } = {
  'Visselhövede': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Bremen': [
    { time: '12:00', temperature: 19, rainProbability: 15 },
    { time: '13:00', temperature: 20, rainProbability: 20 },
    { time: '14:00', temperature: 21, rainProbability: 25 },
    { time: '15:00', temperature: 20, rainProbability: 30 },
    { time: '16:00', temperature: 19, rainProbability: 35 }
  ],
  'Hamburg': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Hannover': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Rotenburg': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Verden': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Walsrode': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Soltau': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Scheeßel': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ],
  'Sottrum': [
    { time: '12:00', temperature: 18, rainProbability: 20 },
    { time: '13:00', temperature: 19, rainProbability: 25 },
    { time: '14:00', temperature: 20, rainProbability: 30 },
    { time: '15:00', temperature: 19, rainProbability: 35 },
    { time: '16:00', temperature: 18, rainProbability: 40 }
  ]
};

export type WeeklyForecast = {
  day: string;
  high: number;
  low: number;
  condition: 'sonnig' | 'teilweise-bewölkt' | 'bewölkt' | 'regnerisch';
}

export const cityWeeklyForecasts: { [key: string]: WeeklyForecast[] } = {
  'Visselhövede': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Bremen': [
    { day: 'Montag', high: 21, low: 14, condition: 'teilweise-bewölkt' },
    { day: 'Dienstag', high: 23, low: 15, condition: 'sonnig' },
    { day: 'Mittwoch', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Donnerstag', high: 19, low: 12, condition: 'regnerisch' },
    { day: 'Freitag', high: 22, low: 14, condition: 'teilweise-bewölkt' }
  ],
  'Hamburg': [
    { day: 'Montag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Dienstag', high: 22, low: 14, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 19, low: 12, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 21, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Hannover': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Rotenburg': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Verden': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Walsrode': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Soltau': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Scheeßel': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ],
  'Sottrum': [
    { day: 'Montag', high: 22, low: 15, condition: 'sonnig' },
    { day: 'Dienstag', high: 24, low: 16, condition: 'teilweise-bewölkt' },
    { day: 'Mittwoch', high: 21, low: 14, condition: 'regnerisch' },
    { day: 'Donnerstag', high: 20, low: 13, condition: 'bewölkt' },
    { day: 'Freitag', high: 23, low: 15, condition: 'sonnig' }
  ]
};

export const weatherConditions = {
  humidity: 65,
  windSpeed: 12,
  pressure: 1013,
  visibility: 10
};

export const availableCities = [
  'Visselhövede',
  'Bremen',
  'Hamburg',
  'Hannover',
  'Rotenburg',
  'Verden',
  'Walsrode',
  'Soltau',
  'Scheeßel',
  'Sottrum'
];

export const weatherHistory: { [key: string]: HistoryData[] } = {
  'Visselhövede': [
    { date: '2024-03-10', temperature: 15, high: 18, low: 12, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 16, high: 19, low: 13, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 14, high: 17, low: 11, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 13, high: 16, low: 10, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 15, high: 18, low: 12, condition: 'sonnig' }
  ],
  'Bremen': [
    { date: '2024-03-10', temperature: 16, high: 19, low: 13, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 17, high: 20, low: 14, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 15, high: 18, low: 12, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 14, high: 17, low: 11, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 16, high: 19, low: 13, condition: 'sonnig' }
  ],
  'Hamburg': [
    { date: '2024-03-10', temperature: 15, high: 18, low: 12, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 16, high: 19, low: 13, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 14, high: 17, low: 11, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 13, high: 16, low: 10, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 15, high: 18, low: 12, condition: 'sonnig' }
  ],
  'Hannover': [
    { date: '2024-03-10', temperature: 17, high: 20, low: 13, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 18, high: 21, low: 14, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 16, high: 19, low: 12, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 15, high: 18, low: 11, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 17, high: 20, low: 13, condition: 'sonnig' }
  ],
  'Rotenburg': [
    { date: '2024-03-10', temperature: 16, high: 19, low: 13, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 17, high: 20, low: 14, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 15, high: 18, low: 12, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 14, high: 17, low: 11, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 16, high: 19, low: 13, condition: 'sonnig' }
  ],
  'Verden': [
    { date: '2024-03-10', temperature: 16, high: 19, low: 13, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 17, high: 20, low: 14, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 15, high: 18, low: 12, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 14, high: 17, low: 11, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 16, high: 19, low: 13, condition: 'sonnig' }
  ],
  'Walsrode': [
    { date: '2024-03-10', temperature: 15, high: 18, low: 12, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 16, high: 19, low: 13, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 14, high: 17, low: 11, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 13, high: 16, low: 10, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 15, high: 18, low: 12, condition: 'sonnig' }
  ],
  'Soltau': [
    { date: '2024-03-10', temperature: 15, high: 18, low: 12, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 16, high: 19, low: 13, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 14, high: 17, low: 11, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 13, high: 16, low: 10, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 15, high: 18, low: 12, condition: 'sonnig' }
  ],
  'Scheeßel': [
    { date: '2024-03-10', temperature: 16, high: 19, low: 13, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 17, high: 20, low: 14, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 15, high: 18, low: 12, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 14, high: 17, low: 11, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 16, high: 19, low: 13, condition: 'sonnig' }
  ],
  'Sottrum': [
    { date: '2024-03-10', temperature: 16, high: 19, low: 13, condition: 'sonnig' },
    { date: '2024-03-11', temperature: 17, high: 20, low: 14, condition: 'teilweise-bewölkt' },
    { date: '2024-03-12', temperature: 15, high: 18, low: 12, condition: 'bewölkt' },
    { date: '2024-03-13', temperature: 14, high: 17, low: 11, condition: 'regnerisch' },
    { date: '2024-03-14', temperature: 16, high: 19, low: 13, condition: 'sonnig' }
  ]
}; 