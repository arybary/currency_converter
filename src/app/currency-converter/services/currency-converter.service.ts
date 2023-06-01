import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency } from 'src/app/core/model/currency.model';
import { CurrencyFacade } from 'src/app/core/state/currency.facade';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  exchangeRates$: Currency[] = [];

  constructor(private readonly currencyFacada: CurrencyFacade) {
    this.currencyFacada.currencies$.subscribe((currencies: Currency[]) => {
      this.exchangeRates$ = currencies;
    });
  }

  convert(
    toCurrency: string,
    fromCurrency: string,
    amount: number
  ): Observable<number> {
    const baseRate = this.exchangeRates$.find(
      (rate) => rate.cc === toCurrency
    )?.rate;
    const targetRate = this.exchangeRates$.find(
      (rate) => rate.cc === fromCurrency
    )?.rate;

    if (baseRate && targetRate) {
     const amountConverted=Number(((amount * targetRate) / baseRate).toFixed(2));
      return of(amountConverted);
    } else {
      return of(1);
    }
  }
}
