import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  apiKey = 'cf3e3bb938b7dc300137e6010fbe89e7';

  constructor(private http: HttpClient) { }

  getGeocodeFromQuery(val: string): Observable<GeocodeData[]> {
    return this.http.get<GeocodeData[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=10&appid=${this.apiKey}`).pipe(
      map((res: GeocodeData[]) => res),
      catchError(() => [])
    );
  }
}
