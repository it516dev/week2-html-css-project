"use client";

import { useEffect, useRef, useState } from "react";

type City = "Beijing" | "Shanghai" | "Chengdu" | "Xi'an";

type Coordinates = {
  lat: number;
  lon: number;
};

type Weather = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
};

const cityCoordinates: Record<City, Coordinates> = {
  Beijing: { lat: 39.9, lon: 116.4 },
  Shanghai: { lat: 31.23, lon: 121.47 },
  Chengdu: { lat: 30.67, lon: 104.06 },
  "Xi'an": { lat: 34.34, lon: 108.94 },
};

export default function WeatherPanel() {
  const [city, setCity] = useState<City>("Beijing");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  async function fetchWeather(selectedCity: City, signal: AbortSignal) {
    const coords = cityCoordinates[selectedCity];

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`,
      { signal }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.current_weather;
  }

  useEffect(() => {
    const controller = new AbortController();
    abortRef.current = controller;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchWeather(city, controller.signal);

        if (!controller.signal.aborted) {
          setWeather(result);
        }
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;

        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    }

    load();

    return () => controller.abort();
  }, [city]);

  function handleCityChange(newCity: City) {
    setCity(newCity);
  }

  async function refreshWeather() {
    setRefreshing(true);
    setError(null);

    try {
      const controller = new AbortController();
      abortRef.current?.abort();
      abortRef.current = controller;

      const result = await fetchWeather(city, controller.signal);

      if (!controller.signal.aborted) {
        setWeather(result);
      }
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") return;

      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setRefreshing(false);
    }
  }

  if (loading) {
    return (
      <section id="weather">
        <h3>{city} Weather</h3>
        <div className="weather-skeleton">
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line short" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="weather">
        <h3>Weather</h3>
        <p className="error" role="alert">
          Something went wrong: {error}
        </p>
        <button onClick={refreshWeather} className="refresh-btn">
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section id="weather">
      <h3>{city} Weather</h3>

      <div className="city-buttons">
        {Object.keys(cityCoordinates).map((c) => (
          <button
            key={c}
            onClick={() => handleCityChange(c as City)}
            className={city === c ? "active-city" : ""}
          >
            {c}
          </button>
        ))}
      </div>

      {weather && (
        <div className="weather-info">
          <p>
            <strong>Temperature:</strong> {weather.temperature}°C
          </p>
          <p>
            <strong>Wind Speed:</strong> {weather.windspeed} km/h
          </p>
          <p>
            <strong>Wind Direction:</strong> {weather.winddirection}°
          </p>
          <p>
            <strong>Weather Code:</strong> {weather.weathercode}
          </p>
          <p>
            <strong>Time:</strong> {weather.time}
          </p>
        </div>
      )}

      <button
        onClick={refreshWeather}
        disabled={refreshing}
        aria-busy={refreshing}
        className="refresh-btn"
      >
        {refreshing ? "Refreshing..." : "Refresh Weather"}
      </button>
    </section>
  );
}