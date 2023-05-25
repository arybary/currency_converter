import { Injectable } from '@angular/core';
import { CurrencyFacade } from 'src/app/core/store/currency.facade';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  constructor(private readonly currencyFacada: CurrencyFacade) { }
  convert(){}
}
