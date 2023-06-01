import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyConvert } from '../state/actions/converter.actions';
import { ConverterFacade } from '../state/converter.facade';

export interface SelectedCurrency {
  currency: string;
  convertCurrency: CurrencyConvert;
}

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent implements OnInit {
  toCurrency$: Observable<string> = this.converterFacade.currencyTo$;
  fromCurrency$: Observable<string> = this.converterFacade.currencyFrom$;
  toAmount$: Observable<number> = this.converterFacade.amountTo$;
  fromAmount$: Observable<number> = this.converterFacade.amountFrom$;

  constructor(private converterFacade: ConverterFacade) {}

  ngOnInit(): void {
    this.converterFacade.initConverter();
  }

  onAmountToChange(amount: number): void {
    this.converterFacade.setAmountTo(amount);
    this.converterFacade.convertAmountFrom();
  }

  onAmountFromChange(amount: number): void {
    this.converterFacade.setAmountFrom(amount);
    this.converterFacade.convertAmountTo();
  }

  onCurrencyChange(currencySelected: SelectedCurrency): void {
    const { convertCurrency, currency } = currencySelected;
    this.converterFacade.setCurrency(convertCurrency, currency);
  }
}
