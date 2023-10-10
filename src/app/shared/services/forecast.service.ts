import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  apiKey = environment.API_KEY;

  constructor(private http: HttpClient) { } 

  getForecastFromService(latitud: number, longitud: number): Observable<ForecastServiceData> {
    return this.http.get<ForecastServiceData>(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&units=metric&appid=${this.apiKey}`).pipe(
      map((res) => res),
      catchError(async () => {
        throw new Error('Error getting forecast data');
      })
    );
  }
}
