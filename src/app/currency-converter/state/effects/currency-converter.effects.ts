import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as CurrencyConverterActions from '../actions/currency-converter.actions';

@Injectable()
export class CurrencyConverterEffects {
  updateCurrencyConversion$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CurrencyConverterActions.setFirstAmount,
          CurrencyConverterActions.setFirstCurrency,
          CurrencyConverterActions.setSecondAmount,
          CurrencyConverterActions.setSecondCurrency
        ),
        tap(() => {
        
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
