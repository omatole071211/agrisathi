export type WeatherSnapshot = {
  temperature: number;
  feelsLike: number;
  description: string;
  precipitationProbability: number;
  rainfall: number;
  humidity: number;
  windSpeed: number;
  location: string;
  source: string;
  updatedAt: string;
  isLive: boolean;
};

const fallbackWeather: WeatherSnapshot = {
  temperature: 28,
  feelsLike: 29,
  description: "Partly cloudy",
  precipitationProbability: 80,
  rainfall: 18,
  humidity: 68,
  windSpeed: 12,
  location: "Niphad, Nashik",
  source: "IMD Agromet mock feed",
  updatedAt: "18 min ago",
  isLive: false,
};

const weatherCodeText: Record<number, string> = {
  0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Foggy", 51: "Light drizzle", 61: "Light rain", 63: "Moderate rain", 65: "Heavy rain", 80: "Rain showers", 95: "Thunderstorm",
};

function getEnv(key: string) {
  return (import.meta.env as Record<string, string | undefined>)[key];
}

function getConfiguredRequest(latitude: number, longitude: number) {
  const baseUrl = getEnv("VITE_WEATHER_API_URL");
  const apiKey = getEnv("VITE_WEATHER_API_KEY");
  if (!baseUrl || !apiKey) return null;
  const url = new URL(baseUrl);
  const isOpenWeather = url.hostname.includes("openweathermap.org");
  if (isOpenWeather) {
    url.searchParams.set("lat", String(latitude));
    url.searchParams.set("lon", String(longitude));
    url.searchParams.set("units", "metric");
    url.searchParams.set("appid", apiKey);
    return { url: url.toString(), provider: "OpenWeather" };
  }
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));
  url.searchParams.set("current", "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m");
  url.searchParams.set("hourly", "precipitation_probability,rain");
  url.searchParams.set("forecast_days", "5");
  url.searchParams.set("timezone", "Asia/Kolkata");
  url.searchParams.set("apikey", apiKey);
  return { url: url.toString(), provider: "Configured weather API" };
}

export async function fetchWeather(latitude = 20.087, longitude = 73.95, locationLabel = "Niphad, Nashik"): Promise<WeatherSnapshot> {
  const request = getConfiguredRequest(latitude, longitude);
  if (!request) return fallbackWeather;
  try {
    const response = await fetch(request.url);
    if (!response.ok) throw new Error(`Weather request failed with ${response.status}`);
    const data = await response.json();
    if (request.provider === "OpenWeather") {
      const rain = Number(data.rain?.["1h"] ?? data.rain?.["3h"] ?? 0);
      return {
        temperature: Math.round(Number(data.main?.temp ?? fallbackWeather.temperature)),
        feelsLike: Math.round(Number(data.main?.feels_like ?? fallbackWeather.feelsLike)),
        description: String(data.weather?.[0]?.description ?? fallbackWeather.description),
        precipitationProbability: rain > 0 ? 80 : 20,
        rainfall: Math.round(rain),
        humidity: Math.round(Number(data.main?.humidity ?? fallbackWeather.humidity)),
        windSpeed: Math.round(Number(data.wind?.speed ?? fallbackWeather.windSpeed) * 3.6),
        location: String(data.name ?? locationLabel),
        source: "OpenWeather live feed",
        updatedAt: "just now",
        isLive: true,
      };
    }
    const current = data.current ?? {};
    const hourly = data.hourly ?? {};
    const code = Number(current.weather_code ?? 2);
    return {
      temperature: Math.round(Number(current.temperature_2m ?? fallbackWeather.temperature)),
      feelsLike: Math.round(Number(current.apparent_temperature ?? fallbackWeather.feelsLike)),
      description: weatherCodeText[code] ?? "Current conditions",
      precipitationProbability: Math.round(Number(hourly.precipitation_probability?.[0] ?? fallbackWeather.precipitationProbability)),
      rainfall: Math.round(Number(hourly.rain?.[0] ?? current.rain ?? fallbackWeather.rainfall)),
      humidity: Math.round(Number(current.relative_humidity_2m ?? fallbackWeather.humidity)),
      windSpeed: Math.round(Number(current.wind_speed_10m ?? fallbackWeather.windSpeed)),
      location: "Niphad, Nashik",
      source: request.provider,
      updatedAt: "just now",
      isLive: true,
    };
  } catch {
    return fallbackWeather;
  }
}

export { fallbackWeather };
