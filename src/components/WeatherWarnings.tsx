'use client';

interface Warning {
  type: 'Sturm' | 'Gewitter' | 'Starkregen' | 'Hitze' | 'Frost';
  severity: 'Niedrig' | 'Mittel' | 'Hoch';
  description: string;
}

interface WeatherWarningsProps {
  warnings: Warning[];
}

export default function WeatherWarnings({ warnings }: WeatherWarningsProps) {
  if (warnings.length === 0) return null;

  return (
    <div className="space-y-2">
      {warnings.map((warning, index) => (
        <div key={index} className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 
            animate-pulse rounded-xl" />
          <div className="relative p-4 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{warning.type}</h4>
                <p className="text-sm">{warning.description}</p>
              </div>
              <span className="text-sm font-medium">{warning.severity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 