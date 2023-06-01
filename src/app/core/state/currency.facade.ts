import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrencyState } from './reducers/currency.reducer';
import * as currencyActions from './actions/currency.actions';
import * as currencySelectors from './selectors/currency.selectors';
import { Currency } from '../model/currency.model';

@Injectable()
export class CurrencyFacade {
  public readonly loading$: Observable<boolean> = this.store.pipe(
    select(currencySelectors.selectCurrencyLoading)
  );
  public readonly currencies$: Observable<Currency[]> = this.store.pipe(
    select(currencySelectors.selectCurrencyData)
  );

  public readonly currencyForHeader$: Observable<Currency[]> = this.store.pipe(
    select(currencySelectors.selectCurrencyForHeader)
  );

  constructor(private readonly store: Store<CurrencyState>) {}

  public loadCurrency(): void {
    this.store.dispatch(currencyActions.LoadCurrencies());
  }
}
