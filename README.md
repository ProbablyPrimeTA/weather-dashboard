# Bene's Wetter Dashboard

Ein modernes, interaktives Wetter-Dashboard entwickelt mit Next.js und Tailwind CSS. Nur für Bene.

## Features

- 🌡️ Aktuelle Wetterinformationen (Nicht wirklich, derzeit platzhalter. Wetter API kann aber hinzugefügt werden.)
- 🌅 Sonnenauf- und Untergangszeiten
- 💨 Windgeschwindigkeit und Luftfeuchtigkeit
- 🌧️ Regenwahrscheinlichkeit
- 📊 Temperaturverlauf
- 🏙️ Städtevergleich
- 💨 Luftqualitätsindex
- ⚠️ Wetterwarnungen

## Technologien

- Next.js 14
- React
- Tailwind CSS
- TypeScript
- Heroicons
- Chart.js

## Installation

1. Repository klonen:
```bash
git clone [repository-url]
```

2. In das Projektverzeichnis wechseln:
```bash
cd weather-dashboard
```

3. Abhängigkeiten installieren:
```bash
npm install
```

4. Entwicklungsserver starten:
```bash
npm run dev
```

5. Browser öffnen und zur folgenden URL navigieren:
```
http://localhost:3000
```

## Umgebungsvariablen

Erstellen Sie eine `.env.local` Datei im Hauptverzeichnis mit folgenden Variablen:

```env
NEXT_PUBLIC_WEATHER_API_KEY=IhrAPIKey
```

## Projektstruktur

```
src/
  ├── app/              # Next.js App Router
  ├── components/       # React Komponenten
  ├── data/            # Mock-Daten und Typen
  └── styles/          # Globale Styles
```

## Komponenten

- `WeatherDashboard`: Hauptkomponente
- `RainProbability`: Zeigt stündliche Regenwahrscheinlichkeiten
- `SunTimeline`: Visualisiert Tageslichtzeiten
- `CityComparison`: Vergleicht Wetterdaten zweier Städte
- `FeelsLikeTemp`: Zeigt gefühlte Temperatur
- `AirQualityCard`: Luftqualitätsindex
- `WeatherChart`: Temperaturverlauf
- `WeatherWarnings`: Aktuelle Wetterwarnungen

## Deployment

Das Projekt kann einfach auf Vercel deployed werden:

1. [Vercel](https://vercel.com) Account erstellen
2. Repository mit Vercel verbinden
3. Automatisches Deployment wird gestartet

## Lizenz

MIT

## Autor

Bene
