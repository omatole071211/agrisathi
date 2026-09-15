import { describe, expect, it } from "vitest";

describe("weather API configuration", () => {
  it("accepts the configured OpenWeather credential", async () => {
    const endpoint = process.env.VITE_WEATHER_API_URL ?? "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    expect(apiKey, "VITE_WEATHER_API_KEY must be configured").toBeTruthy();

    const url = new URL(endpoint);
    url.searchParams.set("q", "Niphad,IN");
    url.searchParams.set("units", "metric");
    url.searchParams.set("appid", apiKey as string);

    const response = await fetch(url);
    const body = await response.text();
    expect(response.ok, `OpenWeather returned ${response.status}: ${body}`).toBe(true);
    const payload = JSON.parse(body);
    expect(payload.main).toBeDefined();
    expect(typeof payload.main.temp).toBe("number");
  }, 15000);
});
