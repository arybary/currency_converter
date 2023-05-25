import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as currencyActions from '../actions/currency.actions';
import { CurrencyApiService } from '../../services/currency.service';
import { Currency } from '../../model/currency.model';

@Injectable({ providedIn: 'root' })
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private apiService: CurrencyApiService
  ) {}

  public readonly load$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.LoadCurrencies),
      mergeMap(() =>
        this.apiService.getExchangeRates().pipe(
          map((data: Currency[]) => {
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
