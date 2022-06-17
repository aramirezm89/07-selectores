import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  Pais, PaisBorder } from '../interfaces/PaisInterface';

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
  params = new HttpParams().set('fields', 'name,cca3');

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {}

  getPaises(region: string): Observable<Pais[]> {
    const URL = `${this.BaseURL}/region/${region}`;
    return this.http.get<Pais[]>(URL, { params: this.params });
  }

  getFronteras(pais: string): Observable<PaisBorder[] | null> {
    if(!pais){
      return of(null)
    }
    const URL = `${this.BaseURL}/alpha/${pais}`;
    return this.http.get<PaisBorder[]>(URL);
  }

  getPaisCodigoSmall(paisCodigo:string) : Observable<Pais>{
     const URL = `${this.BaseURL}/alpha/${paisCodigo}`;
     return this.http.get<Pais>(URL,{params:this.params})
  }
}
