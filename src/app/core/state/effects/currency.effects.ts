import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, catchError, mergeMap, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as currencyActions from '../actions/currency.actions';
import { CurrencyApiService } from '../../services/currency.service';
import { Currency } from '../../model/currency.model';
import { currencyUah } from '../../constans/baseCurrencyRate';

@Injectable({ providedIn: 'root' })
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private apiService: CurrencyApiService
  ) {}

  load$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.LoadCurrencies),
      delay(2000),
      mergeMap(() =>
        this.apiService.getExchangeRates().pipe(
          map((data: Currency[]) => {
            data.push(currencyUah);
            return currencyActions.LoadCurrenciesSuccess({ data });
          }),
          catchError((error) =>
            of(currencyActions.LoadCurrenciesFailure({ error }))
          )
        )
      )
    );
  });
}
