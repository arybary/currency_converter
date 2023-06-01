import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../model/currency.model';
import { apiUrlNBU } from '../constans';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  private apiUrl = apiUrlNBU;

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl);
  }
}
