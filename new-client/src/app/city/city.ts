import { Component } from '@angular/core';
import { CityData } from './city-data';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-city',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './city.html',
  styleUrl: './city.css'
})
export class City {
  cities$: Observable<CityData[]>;
  
  constructor(private http: HttpClient) {
    this.cities$ = this.http.get<CityData[]>(environment.apiUrl + "api/Cities/");
  }
}
