import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
  // server often sends F too; mark it optional
  temperatureF?: number;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  // Calls your ASP.NET Core endpoint via the proxy
  // Angular calls /api/WeatherForecast → proxy forwards to https://localhost:7243/api/WeatherForecast
  getWeather(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('/api/WeatherForecast');
  }
}
