import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import * as converterActions from './actions/converter.actions';
import { ConverterState } from './reducers/converter.reducer';
import * as converterSelectors from './selectors/converter.selectors';

@Injectable()
export class ConverterFacade {
  public readonly converterData$: Observable<ConverterState> = this.store.pipe(
    select(converterSelectors.selectConverterState)
  );

  public readonly amountTo$: Observable<number> = this.store.pipe(
    select(converterSelectors.selectAmountTo)
  );

  public readonly amountFrom$: Observable<number> = this.store.pipe(
    select(converterSelectors.selectAmountFrom)
  );

  public readonly currencyTo$: Observable<string> = this.store.pipe(
    select(converterSelectors.selectCurrencyTo)
  );

  public readonly currencyFrom$: Observable<string> = this.store.pipe(
    select(converterSelectors.selectCurrencyFrom)
  );
  public readonly rate$: Observable<number> = this.store.pipe(
    select(converterSelectors.selectRate)
  );
  constructor(private readonly store: Store<ConverterState>) {}

  public initConverter(): void {
    this.store.dispatch(converterActions.initConverter());
  }

  public setAmountTo(amount: number): void {
    this.store.dispatch(converterActions.setAmountTo({ amount }));
  }
  public setAmountFrom(amount: number): void {
    this.store.dispatch(converterActions.setAmountFrom({ amount }));
  }
  public convertAmountTo(): void {
    this.store.dispatch(converterActions.convertToAmount());
  }
  public convertAmountFrom(): void {
    this.store.dispatch(converterActions.convertFromAmount());
  }

  public setCurrency(
    currencyConvert: converterActions.CurrencyConvert,
    currency: string
  ): void {
    this.store.dispatch(
      converterActions.setSelectedCurrency({ currencyConvert, currency })
    );
  }
}
