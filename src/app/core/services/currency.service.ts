import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../model/currency.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl);
  }
}
