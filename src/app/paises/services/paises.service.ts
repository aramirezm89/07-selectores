import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/RegionInterface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  BaseURL: string = 'https://restcountries.com/v3.1';
  params = new HttpParams().set(
    'fields',
    'name,capital,population,cca2,languages,flags,translations'
  );

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {}

  getRegiones(region: string): Observable<Pais[]> {
    const URL = `${this.BaseURL}/region/${region}`;
    return this.http.get<Pais[]>(URL, { params: this.params });
  }
}
