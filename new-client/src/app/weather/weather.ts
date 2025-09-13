import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class Weather {
  constructor(http: HttpClient) {
    http.get<WeatherData[]>('https://localhost:7243/weatherforecast').subscribe(result => {
      
    })
  }
}
