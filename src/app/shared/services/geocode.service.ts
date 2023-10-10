import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  apiKey = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getGeocodeFromQuery(val: string): Observable<GeocodeData[]> {
    return this.http.get<GeocodeData[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=10&appid=${this.apiKey}`).pipe(
      map((res: GeocodeData[]) => res),
      catchError((error) => {
        throw error(error)
      })
    );
  }
}
