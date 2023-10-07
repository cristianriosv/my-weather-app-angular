import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  apiKey = 'cf3e3bb938b7dc300137e6010fbe89e7';

  constructor(private http: HttpClient) { }

  getForecastFromService(latitud: number, longitud: number): Observable<ForecastDataList[]> {
    return this.http.get<ForecastData>(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&units=metric&appid=${this.apiKey}`).pipe(
      map((res) => res.list),
      catchError(async () => [])
    );
  }
}
